window.addEventListener("DOMContentLoaded", () => {
    bindTweets();
});

const bindTweets = () => {
    const elements = document.querySelectorAll('.btn-danger');
    const tweetContainer = document.querySelector('#tweet-list-container');
    elements.forEach(e => {
        e.addEventListener("click", ($event) => {
            const tweetId = $event.target.getAttribute('tweetid');
            axios
                .delete('/tweets/' + tweetId)
                .then(response => {
                    tweetContainer.innerHTML = response.data;
                    bindTweets();
                })
                .catch(err => {
                    console.log(err);
                })
        });
    })
}