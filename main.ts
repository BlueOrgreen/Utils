
/**
 * @param callback 需要判断的函数
 * @returns 是否是异步函数
 */
function isAsyncFunction <T, R extends Array<any>>(
    callback: (...args: R) => Promise<T> | T
): callback is  (...args: R) => Promise<T> {
    const AsyncFunction = (async () => {}).constructor;
    return callback instanceof AsyncFunction === true
}


/**
 * @param {string} url 脚本地址
 * @param {Function} callback 脚本加载完后执行的回调函数
 */
function loadScript(url: string, callback?: () => void) {
    const script: HTMLScriptElement = document.createElement("script");
    script.type = "text/javascript";

    script.onload = function() {
        callback && callback()
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}


export {
    isAsyncFunction,
    loadScript
}