        async function query(data) {
            const response = await fetch(
                "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
                {
                    headers: { 
                        "Accept": "image/png",
                        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                        "Content-Type": "application/json" 
                    },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );
            const result = await response.blob();
            return result;
        }

        document.getElementById("textForm").addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(this);
            document.getElementById("loadingOverlay").style.display = "flex";

            const comicForm = document.getElementById("comicForm");
            comicForm.remove();

            const comicPanels = document.getElementById("comicPanels");
            comicPanels.innerHTML = ` `;

            for (const [panelNumber, text] of formData.entries()) {
                const data = { "inputs": text };
                const imageBlob = await query(data);
                const imageUrl = URL.createObjectURL(imageBlob);

                const comicPanel = document.createElement("div");
                comicPanel.className = "comicPanel";

                comicPanel.innerHTML = `<img src="${imageUrl}" alt="Comic Panel" id="images">`;

                document.getElementById("comicPanels").appendChild(comicPanel);
            }
            document.getElementById("loadingOverlay").style.display = "none";
        });