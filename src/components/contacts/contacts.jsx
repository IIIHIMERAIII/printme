import { ContactsWrapper, ContactsList, ContactsItem, ContactLink } from "./styled";

import { links } from "../../assets/roots";

export const Contacts = () => {
    return (
        <ContactsWrapper>
            <ContactsList>
                <ContactsItem>
                    <a
                    style={{color: 'black', cursor: 'pointer'}}
                    href={links.googleMaps}
                    target='_blank'
                    rel="noreferrer"
                    >
                        м. Полтава <br /> вул. Пушкіна, 53, оф. 11
                    </a>
                </ContactsItem>
                <ContactsItem> <ContactLink href='tel:+380504049636' > {`(+380) 50 404 96 36`} </ContactLink> <br/> <ContactLink href='tel:+380684049636'> {`(+380) 68 404 96 36`} </ContactLink> </ContactsItem>
            </ContactsList>
        </ContactsWrapper>
    )
}