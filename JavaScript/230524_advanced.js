fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=> {
        let count = 0;
        let avg = 0;
        for (const i of data) {
            avg += i.price;
            count++;
        }
        avg /= count;
        console.log(count);
        console.log(avg);
    });