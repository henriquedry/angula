
<div class="container">

   <div class="row" >

<?php
include "conexao.php";
$sql = "SELECT * FROM produtos" ;
$result = $conn->query($sql);
if($result->num_rows > 0){
  while($row = $result->fetch_assoc()){
   
    echo'
    
  <div class="col lg-4 -md-4 sm-12">
    <div class="card-droup" style="padding-top: 60px; ">
     <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="'.$row['foto'].'" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">'.$row['nome'].'</h5>
    <p class="card-text">Preço:   '.$row['preco'].'</p>
   <center><button>Comprar<button><center>	
    
  </div>
</div>
</div>
</div>
';
}
} else{
  echo "0 resultados";
}
$conn->close();
?>

</div>
</div>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>