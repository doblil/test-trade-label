export const createTimeStamp = () => {
    const now = new Date();
    return function(){
        return `${Date.parse(new Date) - Date.parse(now)}ms`
    }
}