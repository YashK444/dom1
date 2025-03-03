<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: hsl(0, 1%, 60%);
            padding: 15px 20px;
            color: white;
        }
        .nav-links {
            list-style: none;
            display: flex;
        }
        .nav-links li {
            margin: 0 15px;
        }
        .nav-links a {
            color: white;
            text-decoration: none;
            font-size: 18px;
        }
        .menu-toggle {
            display: none;
            font-size: 24px;
            cursor: pointer;
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
                flex-direction: column;
                background: hsl(0, 1%, 60%);
                position: absolute;
                top: 60px;
                left: 0;
                width: 100%;
                text-align: right;
            }
            .nav-links.active {
                display: flex;
            }
            .menu-toggle {
                display: block;
            }
        }
    </style>
</head>
<body>
    <!--nav bar section-->
    <nav class="navbar">
        <div class="logo">MyLogo</div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="menu-toggle" id="menuToggle">&#9776;</div>
    </nav>

    <script>
        const menuToggle = document.getElementById("menuToggle");
        const navLinks = document.getElementById("navLinks");

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    </script>

</body>
</html>
