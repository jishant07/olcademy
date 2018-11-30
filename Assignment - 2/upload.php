<!DOCTYPE html>
<html>
<head>
	<title>FILEUPLOAD</title>
</head>
<body>
	<?php
		$target_path = "uploads/";
		$target_path = $target_path.basename($_FILES['filetoupload']['name']);
		$type = $_FILES['filetoupload']['type'];
		if ($type == "image/jpeg" || $type == "image/jpg" || $type == "image/png")
		{
			if(move_uploaded_file($_FILES['filetoupload']['tmp_name'],$target_path))
			{
				echo "Success!!!";
			}
			else
			{
				echo "Something went wrong...";
			}
		}
		else if($type == null)
		{
			echo "Select a file first";
		}
		else
		{
			echo "Upload JPEG or JPG files only";
		}
	?>
</body>
</html>
