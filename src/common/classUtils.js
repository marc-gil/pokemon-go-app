export function mergeClasses(...classes) {
    return classes.filter(className => !!className).join(' ');
}