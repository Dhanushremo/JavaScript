document.getElementById('login').addEventListener('submit', function(e){

    e.preventDefault();
    const userName=document.getElementById('n').value.trim();
    const password=document.getElementById('p').value.trim();

    if(userName==='' || password===''){
        alert("Bother UserName and password are required");
    }else{
        alert('Submted Sucessfulyy!');
    }

})