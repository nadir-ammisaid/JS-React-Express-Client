import { useEffect, useState } from "react";

interface Employee {
	name: {
		first: string;
		last: string;
	};
	email: string;
	picture: {
		medium: string;
	};
}

const App = () => {
	const [employee, setEmployee] = useState<Employee | null>(null);

	useEffect(() => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => setEmployee(data.results[0]))
			.catch((error) => console.error("Error fetching employee:", error));
	}, []);

	return (
		<div>
			<h1>Employee</h1>
			{employee && (
				<div>
					<h2>
						{employee.name.first} {employee.name.last}
					</h2>
					<p>{employee.email}</p>
					<img
						src={employee.picture.medium}
						alt={`${employee.name.first} ${employee.name.last}`}
					/>
				</div>
			)}
		</div>
	);
};

export default App;
