import { Container } from "./styles";
import reminderLogo from "../../assets/images/Logo.jpg";
import { Button } from "../Button";
import { useState } from "react";
import { NewStickyModal } from "../NewStickyModal";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }
    
    // function decrement() {
    // setNumber(number - 1);
    //}
    
   return (
    <Container>
        <img src={reminderLogo} alt="Logo React Reminder" />

        {/*<p style={{color:"white"}}>{number}</p> */}
        
        <Button title="Adicionar Lembrete" onClick={handleOpenModal}/>
        {/* <Button title="Remover um lembrete" onClick={decrement} />*/}  

        <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />    
    </Container>
    ); 
}