import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input 
						type="text"
						onChange={(e) => setInputValue(e.target.value)} // Corregido: se pasa e como argumento
						value={inputValue}
						onKeyDown={(e) => { // Cambiado a onKeyDown
							console.log("key was pressed", e.key);
							if (e.key === "Enter") {
								setTodos([...todos, inputValue]); // Actualiza todos con el nuevo elemento
								setInputValue(""); // Limpia el campo después de agregar el todo
							}
						}}
						placeholder="What do you need to do?"
					/>
				</li>
				{todos.map((item, index) => (
					<li key={index} style={{ display: "flex", alignItems: "center" }}>
					{item} 
					<i 
						className="fas fa-trash-alt" 
						onClick={() => setTodos(todos.filter((t, currentIndex) => currentIndex !== index))}
						style={{ marginLeft: "10px", cursor: "pointer" }} // Agregado margen a la izquierda
					></i>
				</li>
				))}
			</ul>

			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;
