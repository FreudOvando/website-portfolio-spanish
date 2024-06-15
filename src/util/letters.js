// typewriter.js
function write(text, callback) {
    let i = 0;
    const intervalId = setInterval(() => {
        if (i < text.length) {
            callback(text.slice(0, i + 1));
            i++;
        } else {
            clearInterval(intervalId);
            setTimeout(() => {
                write(text, callback);
            }, 3000);
        }
    }, 100);
}

export default write;
