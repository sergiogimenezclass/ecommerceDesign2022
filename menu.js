miMenu = /*html*/`<div class="container-fluid">
<a class="navbar-brand" href="#">
    <img src="https://images.vexels.com/media/users/3/262716/isolated/lists/36c9e2e9fae2bc6aabf7019297ad6721-zapato-bowling-alto-contraste.png"
        alt="" width="30" height="24">
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="categorias.html">
                Categorias
            </a>    
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="productos.html">
                Producto
            </a>    
        </li>
        <li class="nav-item">
            <a class="nav-link" href="carrito.html">Carrito</a>
        </li>
    </ul>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
</div>
</div>`

document.querySelector('nav').innerHTML = miMenu
