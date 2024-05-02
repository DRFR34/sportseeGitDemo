
import './serverOffModal.scss';

/**
 * Creates a modal for when the server is not responding.
 *
 * @return {undefined} No returns any value.
 */
export default function serverOffModal() {

        const modal = document.createElement('div');
        modal.classList.add('modal');

        const msgBox = document.createElement('div');
        msgBox.className = 'msgBox';
        
        const closeModalBtn = document.createElement('button');
        closeModalBtn.className = 'msgBox__closeModalBtn';
        closeModalBtn.textContent = 'Fermer'; 
        closeModalBtn.addEventListener('click', () => {
            modal.remove();
        });

            msgBox.innerHTML = `
                    <p class="msgBox__text">
                        <span>ATTENTION !</span>
                        <br/>
                        <br/>
                        Le serveur n'a pas répondu.<br/>
                        Les graphiques afficheront vos données locales.                   
                    </p>
                    <br/>
                    <br/>
                    
                </div>
            </div>
        `;

        msgBox.appendChild(closeModalBtn);
        modal.appendChild(msgBox);
        document.querySelector('#root').appendChild(modal);

}

