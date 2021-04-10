
export function combineUrlPath(path1: string, path2: string) : string{

    if (path1 && path2) {
        if (path1.endsWith('/')){
            return path1 + path2;
        }
        else{
            return path1 + '/' + path2;
        }
    }
    if (path1)
        return path1;

    if (path2)
        return path2;

    return '';
}