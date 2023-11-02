document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    const countDownDate = new Date("Jan 1, 2030 00:00:00").getTime();
    
    //限制样式
    const formatNumber = (number) => {
        return number < 10 ? '0' + number : number;
    };

    // Update the countdown every 1 second
    const x = setInterval(function () {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
        const hours = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));

        // Output the result in an element with id="countdown"
        document.getElementById("countdown").innerHTML = days + "D" + hours + ":"
            + minutes + ":" + seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "AGI IS HERE";
        }
    }, 1000);

    // Example of how to add predictions dynamically
    const predictions = [
        { name: "Elon Musk", prediction: "2029", link: "https://www.tesla-mag.com/elon-musk-says-xai-aims-for-safe-ai-predicts-full-agi-by-2029/" },
        { name: "OpenAI", prediction: "2030", link: "https://openai.com/blog/introducing-superalignment" },
        { name: "Elon Musk", prediction: "2035", link: "https://example.com/elon" },
        { name: "Elon Musk", prediction: "2035", link: "https://example.com/elon" },
        { name: "Elon Musk", prediction: "2035", link: "https://example.com/elon" },
        { name: "Elon Musk", prediction: "2035", link: "https://example.com/elon" },
        // Add more predictions here...
    ];

    const predictionsList = document.getElementById('predictions');
    predictions.forEach(prediction => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${prediction.link}" target="_blank">${prediction.name} predicts AGI in ${prediction.prediction}</a>`;
        predictionsList.appendChild(listItem);
    });
});
