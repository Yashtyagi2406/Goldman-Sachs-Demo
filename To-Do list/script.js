function processData(callback) {
    console.log("Processing data...")

    callback()
}

function done() {
    console.log("Data processed")
}

processData(done)