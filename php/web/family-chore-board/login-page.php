<?php session_start() ?>
<!DOCTYPE html>
<html>
	<head>
		<title>Choreboard - Login</title>
		<?php include('php-chunks/header.php'); ?>
		<form action="php/login.php" method="POST">
			<div class="container">
				<label for="uname">
					<b>Name</b>
					<span id="loginFailed">Incorrect Name or Password: try again</span>
				</label>
				<input type="text" placeholder="Enter Name" name="name" required>
				<label for="psw"><b>Password</b></label>
				<input type="password" placeholder="Enter Password" name="password" required>
				<div class="buttons">
					<button type="submit">Login</button>
					<a href="sign-up-page.php" id="sign-up">Sing Up</a>
				</div>
			</div>
		</form>
	</body>
</html>
