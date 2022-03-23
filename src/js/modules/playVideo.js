class PlayVideo {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.modal = document.querySelector(overlay);
        this.closeBtn = this.modal.querySelector('.close');
        console.log(this.closeBtn);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Create player only once
                if (document.querySelector('iframe#frame')) {
                    this.modal.style.display = 'flex';
                } else {
                    const urlPath = btn.getAttribute('data-url');
                    this.createVideoPlayer(urlPath);
                }
            });
        });
    }

    bindCloseBtn() {
        this.closeBtn.addEventListener('click', () => {
            this.modal.style.display = 'none';
            this.player.stopVideo();
        });
    }

    createVideoPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url
        });
        this.modal.style.display = 'flex';
    }

    render() {
        // This code loads the IFrame Player API code asynchronously.
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
    }
}

export default PlayVideo;