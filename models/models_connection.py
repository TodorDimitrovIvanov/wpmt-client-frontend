import errno
import json
import os
import time
from typing import Optional
from ftplib import FTP as FTPcontroller
from ftplib import all_errors
import ftplib
import requests
import router
from os.path import expanduser, isfile, join
from pathlib import Path

user_home = expanduser('~')
__ftp_sleep_interval__ = 0.1

__app_headers__ = {
    'Host': 'cluster-eu01.wpmt.org',
    'User-Agent': 'WPMT-Client-API/1.0',
    'Referer': 'http://localhost:13337/models_connection.py',
    'Content-Type': 'application/json'
}


class Connection:

    @staticmethod
    def connection_start(conn_type: str, hostname: str, username: str, password: str, port: int, path: str):

        pass

    @staticmethod
    def download_php_client():
        # This function downloads a copy of the wp-multitool.php file to the user's machine
        if not isfile(join(user_home, 'WPMT', 'config', 'wp-multitool.php')):
            try:
                Path(join(user_home, 'WPMT', 'config')).mkdir(parents=True, exist_ok=True)
                client_file = open(join(user_home, 'WPMT', 'config', 'wp-multitool.php'), 'wb')
                client_file_contents = requests.get(router.__wpmt_php_client_url__)
                client_file.write(client_file_contents.content)
                client_file.close()
                return True
            except IOError as err:
                message = "[Client][Connection][Error][01]: Can't download the wpmt-client file. Full error: " + str(err)
                router.send_to_logger("error", message, client_id=None, client_email=None)
                return False
            except:
                return False
        else:
            return True


class FTP:
    @staticmethod
    def start(hostname: str, username: str, password: str, port: int, path: str):
        try:
            ftp_conn = FTPcontroller()
            ftp_conn.connect(hostname, port)
            ftp_conn.login(username, password)
            return ftp_conn
        except all_errors as err:
            message = "[Client][FTP][Error][01]: Can't connect to host. Full error: " + str(err)
            router.send_to_logger("error", message, client_id=None, client_email=None)
            return None

    @staticmethod
    def upload_wpmt_php_client():
        if isfile(join(user_home, 'WPMT', 'config', 'wp-multitool.php')):
            try:
                Path(join(user_home, 'WPMT', 'config')).mkdir(parents=True, exist_ok=True)
                client_file = open(join(user_home, 'WPMT', 'config', 'wp-multitool.php'), 'wb')
                ftp_conn = FTP.start()
                result = ftp_conn.storbinary('STOR wp-multitool.php', client_file)
                ftp_conn.close
                if result == "226 Transfer complete":
                    return True
                else:
                    return False
            # TODO: Add proper error handling here
            except:
                return False

    @staticmethod
    def ftp_download_to_local(ftp_conn, destination_dir, path="/"):
        # This function will automatically recreate the dir structure from the remote host on the local machine
        # Since it runs recursively, it will also download all of the files and place the
        # Source: http://rizwanansari.net/download-all-files-from-ftp-in-python/
        global __ftp_sleep_interval__
        for elem in [ftp_conn, destination_dir]:
            if elem is None or elem == "":
                return{
                    "Response": "Failure",
                    "Message": "FTP.ftp_download_to_local: Missing parameters"
                }
        try:
            ftp_conn.cwd(path)
            os.chdir(destination_dir)
            FTP.ftp_create_local_dir(destination_dir[0:len(destination_dir)-1] + path)
            print("Created: " + destination_dir[0:len(destination_dir)-1] + path)
        except OSError:
            pass
        except ftplib.error_perm:
            return {
                "Response": "Failure",
                "Messsage": "FTP.ftp_download_to_local: Can't access folder [" + path + "]."
            }

        try:
            ftp_filelist = ftp_conn.nlst()
            # TODO: Here we need to retrieve the total number of files and folders to be downloaded
            # And pass it to the /backup/monitor/file/total endpoint (to be added)
        except ftplib.error_perm as err:
            if str(err) == "550 No files found":
                print("No files found in folder. Error: ", str(err))

        for file in ftp_filelist:
            # TODO: Here we need to add a counter that increments with each file
            # And pass it to the /backup/monitor/file/current endpoint (to be added)
            time.sleep(__ftp_sleep_interval__)
            try:
                ftp_conn.cwd(path + file + "/")
                FTP.ftp_download_to_local(ftp_conn, destination_dir, path + file + "/")
            except ftplib.error_perm:
                # If not a folder then we download the file
                os.chdir(destination_dir[0:len(destination_dir) - 1] + path)
                try:
                    ftp_conn.retrbinary("RETR " + file, open(os.path.join(destination_dir + path, file),"wb").write)
                    print("Downloaded in Binary: " + file)
                except:
                    return {
                        "Response": "Failure",
                        "Messsage": "FTP.ftp_download_to_local: Can't download file [" + file + "]."
                    }
        return


    @staticmethod
    def ftp_create_local_dir(path):
        try:
            os.makedirs(path)
        except OSError as err:
            if err.errno == errno.EEXIST and os.path.isdir(path):
                pass
            else:
                raise


    @staticmethod
    def get_cwd(hostname: str, username: str, password: str, port: int):
        ftp_conn = FTP.start(hostname, username, password, port)
        result = ftp_conn.pwd()
        ftp_conn.close()
        return result

    @staticmethod
    def search_wp_config():
        # TODO: We should build a function that finds all files named 'wp-config.php'
        ftp_conn = FTP.start()
        root_path = ftp_conn.pwd()
        root_search = ftp_conn.retrlines('LIST *wp-config*')
        print("FTP.search_wp_config: First Search", root_search, "\nType: ", type(root_search))


class SSH:
    pass


class SFTP:
    pass


class IMAP:
    pass


