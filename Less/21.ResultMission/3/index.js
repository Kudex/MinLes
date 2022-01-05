function groupBy(array, fn) {
    const result = {}
    array.forEach(value => {
        const key = fn(value);
        console.log("result[key]: ", result[key])
        if (!result[key]) {
            result[key] = [];
            console.log("result[key]_2: ", result[key])

        }

        result[key].push(value)
        console.log("key: ", key);
    })

    return result;
}

const res = groupBy([2.3, 2.2, 3.4], Math.floor)
console.log(res);