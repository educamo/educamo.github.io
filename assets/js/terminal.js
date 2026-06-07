// Simple typing effect for terminal icon
const terminalIcon = document.querySelector(".material-symbols-outlined");
terminalIcon.addEventListener("mouseover", () => {
	terminalIcon.classList.add("animate-pulse");
});
terminalIcon.addEventListener("mouseout", () => {
	terminalIcon.classList.remove("animate-pulse");
});

function toggleTerminal() {
	const overlay = document.getElementById("terminal-overlay");
	overlay.classList.toggle("hidden");
	if (!overlay.classList.contains("hidden")) {
		document.getElementById("terminal-input").focus();
	}
}

function clear() {
	const container = document.getElementById("terminal-input").parentElement.parentElement;
	const inputs = container.querySelectorAll("p:not(:last-child)");
	inputs.forEach((p) => p.remove());
	const terminalInput = document.getElementById("terminal-input");
	terminalInput.value = "";
	terminalInput.focus();
	container.scrollTop = 0;
}

// Simple terminal logic
const terminalInput = document.getElementById("terminal-input");
terminalInput?.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		const val = this.value.toLowerCase();
		const container = this.parentElement.parentElement;
		const p = document.createElement("p");
		p.className = "text-on-surface-variant";

		if (val === "help") {
			p.innerHTML = "Available: projects, skills, contact, clear, exit";
		} else if (val === "projects") {
			p.innerHTML =
				"Fetching project manifest... [Done] - CRM Enterprise, SaaS Dashboard, API Gateway";
		} else if (val === "skills") {
			p.innerHTML = "Skills: JavaScript, Python, React, Node.js, PostgreSQL, Docker...";
		} else if (val === "contact") {
			p.innerHTML = "Email: eduardocarrascodev@gmail.com";
		} else if (val === "clear") {
			clear();
			return;
		} else if (val === "exit") {
			toggleTerminal();
		} else if (val === "") {
			// Ignorar Enter en input vacío
			return;
		} else {
			p.innerHTML = `Command not found: ${val}`;
		}

		container.insertBefore(p, this.parentElement);
		this.value = "";
		container.scrollTop = container.scrollHeight;
	}
});

// Toggle terminal on icon click
document.querySelector('[data-icon="terminal"]').addEventListener("click", toggleTerminal);
