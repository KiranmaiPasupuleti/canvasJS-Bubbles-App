<!DOCTYPE html>
<html>

<head> </head>

<body>
    <canvas id="myCanvas"></canvas>
    <canvas id="myCanvas"></canvas>
    <script>
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        // Set the canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate the center point of the canvas
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;

        // Calculate the half width and height of the rectangle
        var rectWidth = 450;
        var rectHeight = 400;

        // Draw the rectangle
        ctx.beginPath();
        ctx.rect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw the first line of circle and arrow
        var circleX = centerX - rectWidth / 2 + 50;
        var circleY = centerY - rectHeight / 2 + 50;
        var radius = 25;
        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "gold";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        var arrowSize = 20;
        var arrowX = centerX + rectWidth / 2 - 50;
        var arrowY = centerY - rectHeight / 2 + 50;
        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY - arrowSize);
        ctx.lineTo(arrowX - arrowSize, arrowY);
        ctx.lineTo(arrowX, arrowY + arrowSize);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        // Draw the second line of circle and arrow
        var circleX2 = centerX - rectWidth / 2 + 50;
        var circleY2 = centerY - rectHeight / 2 + 150;
        ctx.beginPath();
        ctx.arc(circleX2, circleY2, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "skyblue";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        var arrowX2 = centerX + rectWidth / 2 - 50;
        var arrowY2 = centerY - rectHeight / 2 + 150;
        ctx.beginPath();
        ctx.moveTo(arrowX2, arrowY2 - arrowSize);
        ctx.lineTo(arrowX2 - arrowSize, arrowY2);
        ctx.lineTo(arrowX2, arrowY2 + arrowSize);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        // Draw the third line of circle and arrow
        var circleX3 = centerX - rectWidth / 2 + 50;
        var circleY3 = centerY - rectHeight / 2 + 250;
        ctx.beginPath();
        ctx.arc(circleX3, circleY3, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        var arrowX3 = centerX + rectWidth / 2 - 50;
        var arrowY3 = centerY - rectHeight / 2 + 250;
        ctx.beginPath();
        ctx.moveTo(arrowX3, arrowY3 - arrowSize);
        ctx.lineTo(arrowX3 - arrowSize, arrowY3);
        ctx.lineTo(arrowX3, arrowY3 + arrowSize);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        // Draw the fourth line of circle and arrow
        var circleX4 = centerX - rectWidth / 2 + 50;
        var circleY4 = centerY - rectHeight / 2 + 350;
        ctx.beginPath();
        ctx.arc(circleX4, circleY4, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "lightgreen";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        var arrowX4 = centerX + rectWidth / 2 - 50;
        var arrowY4 = centerY - rectHeight / 2 + 350;
        ctx.beginPath();
        ctx.moveTo(arrowX4, arrowY4 - arrowSize);
        ctx.lineTo(arrowX4 - arrowSize, arrowY4);
        ctx.lineTo(arrowX4, arrowY4 + arrowSize);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        // Draw the "Bubbles App" text
        ctx.font = "bold 30px Arial";
        ctx.fillStyle = "black";
        var text = "Bubbles App";
        var textWidth = ctx.measureText(text).width;
        ctx.fillText(text, centerX - textWidth / 2, centerY - rectHeight / 2 - 20);
    </script>
    <canvas id="myCanvas2"></canvas>
    <script>
        var canvas = document.getElementById("myCanvas2");
        var ctx = canvas.getContext("2d");

        // Set the canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate the center point of the canvas
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;

        // Calculate the half width and height of the rectangle
        var rectWidth = 450;
        var rectHeight = 400;

        // Draw the rectangle
        ctx.beginPath();
        ctx.rect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw the first line of circle and arrow
        var circleX = centerX - rectWidth / 2 + 50;
        var circleY = centerY - rectHeight / 2 + 50;
        var radius = 25;
        ctx.beginPath();
        ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "gold";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        var arrowSize = 20;
        var arrowX = centerX + rectWidth / 2 - 50;
        var arrowY = centerY - rectHeight / 2 + 50;
        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY - arrowSize);
        ctx.lineTo(arrowX - arrowSize, arrowY);
        ctx.lineTo(arrowX, arrowY + arrowSize);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();


        // Draw the second line of circle and arrow
        var circleX2 = centerX - rectWidth / 2 + 50;
        var circleY2 = centerY - rectHeight / 2 + 150;
        ctx.beginPath();
        ctx.arc(circleX2, circleY2, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "skyblue";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        var arrowX2 = centerX + rectWidth / 2 - 50;
        var arrowY2 = centerY - rectHeight / 2 + 150;
        ctx.beginPath();
        ctx.moveTo(arrowX2, arrowY2 - arrowSize);
        ctx.lineTo(arrowX2 - arrowSize, arrowY2);
        ctx.lineTo(arrowX2, arrowY2 + arrowSize);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        // Draw the third line of circle and arrow
        var circleX3 = centerX - rectWidth / 2 + 50;
        var circleY3 = centerY - rectHeight / 2 + 250;
        ctx.beginPath();
        ctx.arc(circleX3, circleY3, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        var arrowX3 = centerX + rectWidth / 2 - 50;
        var arrowY3 = centerY - rectHeight / 2 + 250;
        ctx.beginPath();
        ctx.moveTo(arrowX3, arrowY3 - arrowSize);
        ctx.lineTo(arrowX3 - arrowSize, arrowY3);
        ctx.lineTo(arrowX3, arrowY3 + arrowSize);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        // Draw the fourth line of circle and arrow
        var circleX4 = centerX - rectWidth / 2 + 50;
        var circleY4 = centerY - rectHeight / 2 + 350;
        ctx.beginPath();
        ctx.arc(circleX4, circleY4, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "lightgreen";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        var arrowX4 = centerX + rectWidth / 2 - 50;
        var arrowY4 = centerY - rectHeight / 2 + 350;
        ctx.beginPath();
        ctx.moveTo(arrowX4, arrowY4 - arrowSize);
        ctx.lineTo(arrowX4 - arrowSize, arrowY4);
        ctx.lineTo(arrowX4, arrowY4 + arrowSize);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
        // Draw the "Bubbles App" text
        ctx.font = "bold 30px Arial";
        ctx.fillStyle = "black";
        var text = "Bubbles App";
        var textWidth = ctx.measureText(text).width;
        ctx.fillText(text, centerX - textWidth / 2, centerY - rectHeight / 2 - 20);

        // Add an event listener to the canvas element that listens for a click event
        canvas.addEventListener("click", function(event) {
            var rect = canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            if (Math.abs(x - arrowX4) < arrowSize && Math.abs(y - arrowY4) < arrowSize) {
                // Initialize the x and y coordinates of the arrow and the circle
                var arrowX = arrowX4;
                var arrowY = arrowY4;
                var circleX = circleX4;
                var circleY = circleY4;

                // Set the speed of the movement
                var speed = 5;

                // Use setInterval to move the arrow towards the circle
                var intervalId = setInterval(function() {
                    arrowX -= speed;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.rect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(arrowX, arrowY - arrowSize);
                    ctx.lineTo(arrowX - arrowSize, arrowY);
                    ctx.lineTo(arrowX, arrowY + arrowSize);
                    ctx.closePath();
                    ctx.fill();
                    ctx.fillStyle = "gray";
                    if (arrowX <= circleX + radius) {
                        clearInterval(intervalId);
                        ctx.fillStyle = "black"
                        ctx.fill();
                    }
                }, 30);
            }
        });
    </script>

</body>

</html>