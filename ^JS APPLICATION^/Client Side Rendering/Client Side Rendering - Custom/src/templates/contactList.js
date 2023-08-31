import contactTemplate from "./contact.js";

const contactListTemplate = (contacts) => `
    <dvi class="contact-list">
        ${contacts.map(x => contactTemplate(x)).join('')}
    </div>
`;

export default contactListTemplate;