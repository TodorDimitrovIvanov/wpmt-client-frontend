export const getIconAltName = (icon: string) => {
    return icon ? icon.toString().split('/').pop()?.toString().split('.').shift()?.toString() : 'No icon name!';
};
