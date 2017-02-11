$(function () {
    var Game = ( () => {

        var sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8, sqr9;
        var moveCount = 0;
        var turn = 0;

        function vari() {

            sqr1 = document.game.sqr1.value;
            sqr2 = document.game.sqr2.value;
            sqr3 = document.game.sqr3.value;
            sqr4 = document.game.sqr4.value;
            sqr5 = document.game.sqr5.value;
            sqr6 = document.game.sqr6.value;
            sqr7 = document.game.sqr7.value;
            sqr8 = document.game.sqr8.value;
            sqr9 = document.game.sqr9.value;
        }
        vari();




        function player1Check() {
            if (sqr1 == " X " && sqr2 == " X " && sqr3 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else if (sqr4 == " X " && sqr5 == " X " && sqr6 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else if (sqr7 == " X " && sqr8 == " X " && sqr9 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else if (sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else if (sqr1 == " X " && sqr4 == " X " && sqr7 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else if (sqr2 == " X " && sqr5 == " X " && sqr8 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else if (sqr3 == " X " && sqr6 == " X " && sqr9 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else if (sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else if (sqr3 == " X " && sqr5 == " X " && sqr7 == " X ") {
                alert("Player 1 winner!")
                reset();
            } else {
                player2Check();
            }
        }

        function player2Check() {
            vari();
            if (sqr1 == " O " && sqr2 == " O " && sqr3 == " O ") {
                alert("Player 2 winner!")
                reset();
            } else if (sqr4 == " O " && sqr5 == " O " && sqr6 == " O ") {
                alert("Player 2 winner!");
                reset();
            } else if (sqr7 == " O " && sqr8 == " O " && sqr9 == " O ") {
                alert("Player 2 winner!");
                reset();
            } else if (sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") {
                alert("Player 2 winner!");
                reset();
            } else if (sqr1 == " O " && sqr4 == " O " && sqr7 == " O ") {
                alert("Player 2 winner!");
                reset();
            } else if (sqr2 == " O " && sqr5 == " O " && sqr8 == " O ") {
                alert("Player 2 winner!");
                reset();
            } else if (sqr3 == " O " && sqr6 == " O " && sqr9 == " O ") {
                alert("Player 2 winner!");
                reset();
            } else if (sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") {
                alert("Player 2 winner!");
                reset();
            } else if (sqr3 == " O " && sqr5 == " O " && sqr7 == " O ") {
                alert("Player 2 winner!");
                reset();
            }
            else {
                drawCheck();
            }
        }

        function drawCheck() {
            vari();
            if (moveCount == 9) {
                setTimeout(()=>{
                    alert("Draw");
                    reset();
                },100);
                
            }
        }



        function reset() {
            document.game.sqr1.value = "     ";
            document.game.sqr2.value = "     ";
            document.game.sqr3.value = "     ";
            document.game.sqr4.value = "     ";
            document.game.sqr5.value = "     ";
            document.game.sqr6.value = "     ";
            document.game.sqr7.value = "     ";
            document.game.sqr8.value = "     ";
            document.game.sqr9.value = "     ";
            vari();
            turn = 0;
            moveCount = 0;
        }

        for (var i = 0; i < $(":input").length; i++) {
            $(":input", i).click(function () {
                if (this.value == '     ' && turn == 0) {
                    this.value = " X ";
                    this.style.color = "red";
                    moveCount++;
                    turn = 1;
                    setTimeout(()=>{
                        vari();
                        player1Check();
                    },100);
                   

                } else if (this.value == '     ' && turn == 1) {
                    this.value = ' O ';
                    this.style.color = "blue";
                    moveCount++;
                    turn = 0;
                    setTimeout(()=>{
                        vari();
                        player1Check();
                    },100);
                }
            });
        };


    })();
});