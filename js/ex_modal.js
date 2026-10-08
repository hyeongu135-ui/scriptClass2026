        
        // addEnentLisener()이용
        // 모달 열기
        // 오버레이 클릭시 모달 닫기
        // 모달 닫기
        let btn_open = document.querySelector('.btn-open');
        let btn_close = document.querySelector('.btn-close');
        let modal = document.querySelector('.modal');
        let overlay = document.querySelector('.overlay');
        btn_open.addEventListener('click',() => {
            modal.classList.add('active');
            overlay.classList.add('active');
        });
        btn_close.addEventListener('click',() => {
            modal.classList.remove('active');
            overlay.classList.remove('active');
        });
        overlay.addEventListener('click',() => {
            modal.classList.remove('active');
            overlay.classList.remove('active');
        });
        