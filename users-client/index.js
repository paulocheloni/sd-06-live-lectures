const formUsuario = document.querySelector("#form-usuario");

const api = {
  loadUsers: async () => {
    options = { headers: { 'Authorization': '123' } };
    const response = await fetch("http://localhost:3000/instrutores");
    const data = await response.json();
    
    return data;
  },
  saveUser: async user => {
    options = { headers: { 'Authorization': '123' } };
    const url = "http://localhost:3000/instrutores";
    
    const response =  await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': '123'
      },
    })
    
    const data = await response.json();
    
    return data;
  },
  getUser: async (id) => {
    options = { headers: { 'Authorization': '123' } };
    const url = `http://localhost:3000/instrutor/${id}`;
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;
  },
  updateUser: async (id, user) => {
    const url = `http://localhost:3000/instrutor/${id}`;
    
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': '123'
      },
    });

    const data = await response.json();
    return data;
  },
  deleteUser: async (id) => {
    const url = `http://localhost:3000/instrutor/${id}`;
    
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Authorization': '123'
      }
    });
    
    const data = await response.json();
    
    return data;
  }
}

const selectUser = async (e) => {
  const id = e.target.getAttribute("data-id");
  const user = await api.getUser(id);
  formUsuario.elements["id"].value = user.id;
  formUsuario.elements['nome'].value = user.nome;
  formUsuario.elements["cargo"].value = user.cargo;
  console.log(user);
}

const clearForm = async (e) => {
  formUsuario.elements["id"].value = "";
  formUsuario.elements["nome"].value = "";
  formUsuario.elements["cargo"].value = "";
};


const removeUser = async (e) => {
  const id = e.target.getAttribute("data-id");
  const response = await api.deleteUser(id);
  if (response) reloadUsers();
  
  e.preventDefault();
};


const reloadUsers = async () => {
  const users = await api.loadUsers();
  
  const listaUsuarios = document.querySelector("#lista-usuarios");
  listaUsuarios.innerHTML = '';
  
  users.map((user) => {
    const li = document.createElement("li");
    
    const buttonRemove = document.createElement("button");
    buttonRemove.addEventListener("click", removeUser);
    buttonRemove.setAttribute("data-id", `${user.id}`);
    buttonRemove.innerHTML = "Excluir";
    
    const buttonSelect = document.createElement("button");
    buttonSelect.addEventListener("click", selectUser);
    buttonSelect.setAttribute("data-id", `${user.id}`);
    buttonSelect.innerHTML = "Selecionar";
    const div = document.createElement("div");
    
    li.innerHTML = user.nome;
    li.appendChild(buttonSelect);
    li.appendChild(buttonRemove);
    
    listaUsuarios.append(li);
  });
}



const submitHandler = async (e) => {
  e.preventDefault();
  
  const data = Object.fromEntries(new FormData(e.target));
  const { id, ...user } = data;
  
  console.log(id);
  console.log(data);
  
  
  const response = ( id === "" ) ? await api.saveUser(user) : await api.updateUser(id, user)
  
  if (response) reloadUsers();
}



window.onload = async function () {
  reloadUsers();
  
  
  formUsuario.addEventListener('submit', submitHandler);
  const buttonClear = document.querySelector('#clear-btn');
  buttonClear.addEventListener('click', clearForm);
};
