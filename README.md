# 🦸 Classificador de Nível de Herói | Hero Level Classifier

Projeto desenvolvido como parte do desafio da **DIO (Digital Innovation One)**. Embora o desafio original solicitasse apenas a implementação da lógica em `index.js`, decidi incrementá-lo com uma interface completa usando **HTML** e **CSS** para deixá-lo mais interativo e visual.

Project developed as part of the **DIO (Digital Innovation One)** challenge.  
Although the original challenge required only the logic in `index.js`, I enhanced it by building a full interface using **HTML** and **CSS** to make it more interactive and visually appealing.

---

## 📌 Sobre o Projeto | About the Project

O desafio solicitado consistia em escrever apenas a lógica JavaScript que classifica o nível de um herói com base na sua quantidade de **XP (experiência)**. Aproveitei a oportunidade para criar uma pequena aplicação web com:

- `index.html` — interface para entrada de dados (nome e XP)
- `style.css` — estilo visual para deixar a aplicação mais atrativa
- `index.js` — lógica de classificação com validação básica

The challenge required writing JavaScript logic to classify a hero’s level based on their **XP (experience)**. I took the opportunity to build a web app using:

- `index.html` — user interface for input (name and XP)
- `style.css` — visual styling
- `index.js` — classification logic with basic validation

---

## 🛠️ Tecnologias Utilizadas | Technologies Used

- `HTML5`
- `CSS3`
- `JavaScript`

---

## 💡 Regras de Classificação | Classification Rules

| Faixa de XP 🇧🇷          | Nível      | XP Range 🇺🇸         | Level     |
| ----------------------- | ---------- | ------------------- | --------- |
| Menor que 1.000         | Ferro      | Less than 1,000     | Iron      |
| 1.001 - 2.000           | Bronze     | 1,001 - 2,000       | Bronze    |
| 2.001 - 5.000           | Prata      | 2,001 - 5,000       | Silver    |
| 5.001 - 7.000           | Ouro       | 5,001 - 7,000       | Gold      |
| 7.001 - 8.000           | Platina    | 7,001 - 8,000       | Platinum  |
| 8.001 - 9.000           | Ascendente | 8,001 - 9,000       | Ascendant |
| 9.001 - 10.000          | Imortal    | 9,001 - 10,000      | Immortal  |
| Maior ou igual a 10.001 | Radiante   | Greater than 10,001 | Radiant   |

---

## 🖥️ Exemplo de Saída | Output Example

**🇧🇷:** O Herói de nome Thor está no nível de Ouro  
**🇺🇸:** The hero named Thor is at the Gold level

---

## ▶️ Como Executar | How to Run

1. Clone o repositório / Clone the repository:

   ```bash
   git clone https://github.com/NiltonAtanasio/NivelDeHeroi

   ```

2. Acesse a pasta do projeto / Navigate to the project folder:

   ```bash
   cd NivelDeHeroi

   ```

3. Abra index.html no navegador ou use Live Server no VS Code / Open index.html in your browser or use Live Server in VS Code

---

## 🚀 O que foi acrescentado além do desafio | What Was Added Beyond the Challenge

Embora o desafio original da DIO solicitasse apenas a implementação da lógica em JavaScript (`index.js`), o projeto foi expandido com uma interface completa e responsiva, tornando a experiência mais interativa e prática.

While the original DIO challenge only asked for the implementation of logic in JavaScript (`index.js`), the project has been expanded with a complete and responsive interface, making the experience more interactive and practical.

### 🔧 Melhorias implementadas | Improvements Implemented:

- **HTML**:

  - Estrutura da interface com campos de entrada para nome e XP do herói
  - Botão de ação para calcular o nível
  - Área de resultado dinâmica para exibir o retorno da lógica

  - Interface structure with input fields for the hero's name and XP
  - Action button to calculate the level
  - Dynamic result area to display the logic's return

- **CSS**:

  - Cores contrastantes para melhor legibilidade
  - Layout responsivo adaptado para telas menores (tablets e celulares)
  - Efeitos visuais e feedback no botão de ação

  - Contrasting colors for better readability
  - Responsive layout adapted for smaller screens (tablets and phones)
  - Visual effects and feedback on the action button

- **JavaScript**:

  - Lógica de classificação de herói conforme os níveis propostos
  - Validação dos campos de entrada (nome vazio, XP inválido ou negativo)
  - Manipulação do DOM para exibir resultados interativos
  - Mensagem de erro personalizada para entradas incorretas

  - Hero classification logic based on proposed levels
  - Input field validation (empty name, invalid or negative XP)
  - DOM manipulation to display interactive results
  - Custom error messages for incorrect entries

---

## 🧠 Aprendizados | What I Learned

- Separação clara entre lógica (JS), estrutura (HTML) e estilo (CSS)
- Criação de uma interface de usuário funcional e intuitiva
- Manipulação do DOM com eventos (`onclick`) e `getElementById`
- Validação de formulários e tratamento de erros
- Aplicação prática de estruturas condicionais e boas práticas de código

- Clear separation between logic (JS), structure (HTML), and style (CSS)
- Creation of a functional and intuitive user interface
- DOM manipulation with events (`onclick`) and `getElementById`
- Form validation and error handling
- Practical application of conditional structures and good coding practices

---

Feito com 💙 para o desafio da [Digital Innovation One](https://www.dio.me).  
**Espero que goste do upgrade!**
