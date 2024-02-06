
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

export {
    isAsyncFunction
}