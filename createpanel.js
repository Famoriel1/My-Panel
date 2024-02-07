            // Create a demo jsPanel with 10 buttons
            jsPanel.create({
                headerTitle: 'Panel',
                theme: 'dark',
                content: generateButtons(10),
                callback: function () {
                    this.content.style.padding = '10px';
                    // Add event listener to the buttons
                    const buttons = this.content.querySelectorAll('button');
                    buttons.forEach(button => {
                        button.addEventListener('click', handleButtonClick);
                    });
                }
            });

            // Function to generate buttons
            function generateButtons(count) {
                let buttonsHTML = '';
                for (let i = 1; i <= count; i++) {
                    buttonsHTML += `<button id="button${i}" style="color: white; background-color: black; border-radius: 7px; margin-right: 10px; margin-bottom: 10px;"> Button ${i} </button>`;
                }
                return buttonsHTML;
            }

            // Event handler for button clicks
            function handleButtonClick(event) {
                // Prevent the default behavior of the button click
                event.preventDefault();

                // Extract the button ID
                const buttonId = event.target.id;

                // Define an object with button IDs as keys and corresponding code snippets as values
                const codeSnippets = {
                    button1: enableToggleEditing(),
                    button2: 'alert("Code for button 1");', // Example code for button 1
                    button3: 'alert("Code for button 1");', // Example code for button 1
                    button4: 'alert("Code for button 1");', // Example code for button 1
                    button5: 'alert("Code for button 1");', // Example code for button 1
                    button6: 'alert("Code for button 1");', // Example code for button 1
                    button7: 'alert("Code for button 1");', // Example code for button 1
                    button8: 'alert("Code for button 1");', // Example code for button 1
                    button9: 'alert("Code for button 1");', // Example code for button 1
                    button10: deleteCookies(),
                    // Add entries for other buttons as needed
                };

                // Execute the code snippet for the clicked button
                if (codeSnippets[buttonId]) {
                    eval(codeSnippets[buttonId]); // Using eval for simplicity, but use caution with dynamic code execution
                }
            }
        });
