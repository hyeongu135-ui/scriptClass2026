        let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let arr1 = Array.from(Array(10), () => new Array(10).fill(''));
        let arr2 = Array.from(Array(10), () => new Array(10).fill(''));
        let arr3 = ['-', '-', '-', '-', '-', '-', '-', '-']
        let arr4 = ['-', '-', '-', '-']
        let total_price = document.getElementById('total_price')
        let t_count = document.getElementById('t_count')
        let p_count = document.getElementById('p_count')
        let pre_count = document.getElementById('pre_count')
        let seat_output = document.getElementById('seat_output');
        let seat_row = document.getElementById('seat_row');
        let seat_output_1 = document.getElementById('seat_output_1')
        let int = 0;
        let adult_count = 0;
        let teenager_count = 0;
        let Path_count = 0;
        let Preferential_count = 0;
        let count = 0;
        let table = `<table>`;
        let total = 0;
        let low_seat = '<table><tr>';
        let chk = -1; // 1은 예매 완료 -1은 예매 안됨 0은 예매중 


        function adult_m() {
            if (adult_count <= 0) {
                alert('최소인원은 1명입니다.')
                return;
            } else {
                adult_count--;
                count--;
            }

            if (count != 0) {
                total = adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000;
            } else {
                total = 0;
            }
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
        <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
            a_count.innerText = adult_count;
        }
        function adult_p() {
            if (adult_count > 7 || count > 7) {
                alert('최대인원은 8명입니다.')
            } else {
                count++
                adult_count++;
            }
            if (count != 0) {
                total = adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000;
            } else {
                total = 0;
            }
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
        <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
            a_count.innerText = adult_count;
        }
        function teenager_m() {
            if (teenager_count <= 0) {
                alert('최소인원은 1명입니다.')
                return;
            } else {
                count--;
                teenager_count--;
            }
            if (count != 0) {
                total = adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000;
            } else {
                total = 0;
            }
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
        <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
            t_count.innerText = teenager_count;
        }
        function teenager_p() {
            if (teenager_count > 7 || count > 7) {
                alert('최대인원은 8명입니다.')
            } else {
                count++
                teenager_count++;
            }
            if (count != 0) {
                total = adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000;
            } else {
                total = 0;
            }
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
        <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
            t_count.innerText = teenager_count;
        }
        function Path_m() {
            if (Path_count <= 0) {
                alert('최소인원은 1명입니다.')
                return;
            } else {
                count--;
                Path_count--;
            }
            if (count != 0) {
                total = adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000;
            } else {
                total = 0;
            }
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
        <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
            p_count.innerHTML = Path_count;
        }
        function Path_p() {
            if (Path_count > 7 || count > 7) {
                alert('최대인원은 8명입니다.')
            } else {
                count++
                Path_count++;
            }
            if (count != 0) {
                total = adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000;
            } else {
                total = 0;
            }
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
        <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
            p_count.innerHTML = Path_count;
        }
        function Preferential_m() {
            if (Preferential_count <= 0) {
                alert('최소인원은 1명입니다.')
                return;
            } else {
                count--;
                Preferential_count--;
            }
            if (count != 0) {
                total = adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000;
            } else {
                total = 0;
            }
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
        <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
            pre_count.innerText = Preferential_count
        }
        function Preferential_p() {
            if (Preferential_count > 7 || count > 7) {
                alert('최대인원은 8명입니다.')
            } else {
                count++
                Preferential_count++;
            }
            if (count != 0) {
                total = adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000;
            } else {
                total = 0;
            }
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
        <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
            pre_count.innerText = Preferential_count
        }


        //좌석 출력, 좌석 번호 입력
        for (let i = 0; i < arr1.length; i++) {
            table += `<tr><td class='seat_row_2'>${arr[i]}</td>`;
            for (let j = 0; j < arr1[i].length; j++) {
                table += `<td onclick='movie_reserve(${i},${j},this)' class = 'seat_num' >${j + 1}</td>`
            }
            table += `</tr>`
        }
        table += '</table>'
        seat_output.innerHTML = table;

        let event01 = document.querySelectorAll('.seat_num');
        event01.forEach((element)=> {
            element.addEventListener('mouseenter',()=>{
                element.classList.add('active')
            })
            element.addEventListener('mouseleave',()=>{
                element.classList.remove('active')
            })
        });
        //좌석 예약+확인()
        let tiket = 0;
        function movie_reserve(seatNum, seatNum2) {
            let seats = document.querySelectorAll('#seat_output .seat_num');
            let index = seatNum*10+seatNum2;
            console.log('index',index)
            console.log('count',count)
            
            
            if(count == 1 && arr1[seatNum][seatNum2]==0){ // 1명 남거나 1명 예약일 경우
                arr1[seatNum][seatNum2] = 1;
                seats[index].classList.add('reserve_2')
                tiket++;
                console.log('tiket+',tiket)
                console.log('1번')
            }else if(count == 1 && arr1[seatNum][seatNum2] == 1){ //1명 예약 후에 취소
                arr1[seatNum][seatNum2] = 0;
                seats[index].classList.remove('reserve_2')
                tiket--;
                console.log('tiket-',tiket)
                console.log('2번')
            }

            // 여기까지-----------------------------------------------------------------------------
            if(count > 1 && arr1[seatNum][seatNum2] == 1 && arr1[seatNum][seatNum2+1] == 1){ //예약중 자리 다시 클릭시 취소 처리 (2자리)
                if(arr1[seatNum][seatNum2] == 1 && arr1[seatNum][seatNum2+1] == 1){
                arr1[seatNum][seatNum2] = 0;
                arr1[seatNum][seatNum2+1] = 0;
                seats[index].classList.remove('reserve_2')
                seats[index+1].classList.remove('reserve_2')
                console.log('1',seats[index].className)
                console.log('2',seats[index+1].className)
                tiket -= 2 ;
                console.log('3')
            }else{
                alert('수에 맞게 선택하시오')
                console.log('4')
                return;
            }
            }
            if(tiket != count && count > 1){ // 2명이상
            //0 이하 9 이상 예외 처리(2자리)
            if(seatNum2+1 > 9){
                console.log('5')
                alert('좌석이 초과 되었습니다.')

            }

            
            //예약석일 경우 예외처리 (2자리)
            if(arr2[seatNum][seatNum2] == 1 || arr2[seatNum][seatNum2+1] == 1){
                alert('예약된 자리입니다.')
                console.log('8')
                return;
            }

            if(arr1[seatNum][seatNum2]==0 && arr1[seatNum][seatNum2+1] == 0){//예약
                arr1[seatNum][seatNum2] = 1;
                arr1[seatNum][seatNum2+1] = 1
                seats[index].classList.add('reserve_2')
                seats[index+1].classList.add('reserve_2')
                console.log(seats[index].className)
                console.log(seats[index+1].className)
                tiket += 2;
                
                console.log('9')
            }
        }
        console.log('10')



            // 선택 좌석 목록을 새로 만듦
            arr3 = ['-', '-', '-', '-', '-', '-', '-', '-'];

            let num = 0;

            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr1[i].length; j++) {
                    if (arr1[i][j] == 1) {
                        arr3[num++] = arr[i] + (j + 1);
                    }
                }
            }

            // 오른쪽 8칸에 표시
            let result = '<table>';
            num = 0;

            for (let i = 0; i < 4; i++) {
                result += '<tr>';

                for (let j = 0; j < 2; j++) {
                    result += `<td class="choice_seat">${arr3[num++]}</td>`;
                }

                result += '</tr>';
            }

            result += '</table>';
            seat_output_1.innerHTML = result;
        }

    
        //좌석 취소
        function reset() {
            let seats = document.querySelectorAll('#seat_output .seat_num');
            let index = 0;

            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr1[i].length; j++) {
                    arr1[i][j] = '';
                    seats[index].classList.remove('reserve_2');
                    index++;
                }
            }

            adult_count = 0;
            teenager_count = 0;
            Path_count = 0;
            Preferential_count = 0;
            count = 0;

            a_count.innerText = 0;
            t_count.innerText = 0;
            p_count.innerText = 0;
            pre_count.innerText = 0;
            total_price.innerHTML = `성인${adult_count}명<br> 청소년${teenager_count}명<br> 경로${Path_count}명<br> 우대${Preferential_count}명<br>
            <p>최종결제금액 : ${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;


            arr3 = ['-', '-', '-', '-', '-', '-', '-', '-'];

            let num = 0;

            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr1[i].length; j++) {
                    if (arr1[i][j] == 1) {
                        arr3[num++] = arr[i] + (j + 1);
                    }
                }
            }

            // 오른쪽 8칸에 표시
            let result = '<table>';
            num = 0;

            for (let i = 0; i < 4; i++) {
                result += '<tr>';

                for (let j = 0; j < 2; j++) {
                    result += `<td class="choice_seat">${arr3[num++]}</td>`;
                }

                result += '</tr>';
            }

            result += '</table>';
            seat_output_1.innerHTML = result;


        }


        function next() {
            let selected = 0;

            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr1[i].length; j++) {
                    if (arr1[i][j] == 1) {
                        selected++;
                    }else{
                        tiket = 0;
                    }
                }
            }



            let seats = document.querySelectorAll('#seat_output .seat_num');
            let index = 0;

            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr1[i].length; j++) {
                    if (arr1[i][j] == 1) {
                        arr2[i][j] = 2;
                        seats[index].classList.add('reserve_3');
                        seats[index].classList.remove('reserve_2');
                    }else{

                    }
                    index++;
                }
            }
            let result = "<table>";
            num = 0;
            let arr3 = ['-', '-', '-', '-', '-', '-', '-', '-']
            for (let i = 0; i <= 3; i++) {
                result += `<tr>`
                for (let j = 0; j <= 1; j++) {
                    result += `<td class = 'choice_seat'>${arr3[num++]}`
                }
                result += `</tr>`
            }
            seat_output_1.innerHTML = `${result}</table>`;
            reset();
            total = 0;
            total_price.innerHTML = `성인${adult_count * 15000}<br> 청소년${teenager_count * 10000}<br> 경로${Path_count * 7000}<br> 우대${Preferential_count * 7000}<br>
        <p>최종결제금액${adult_count * 15000 + teenager_count * 10000 + Path_count * 7000 + Preferential_count * 7000}</p>`;
        }