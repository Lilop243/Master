import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Block Master</Feature.Title>
          <Feature.SubTitle>Mira desde cualquier lugar tus series y peliculas favoritas</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Suscribete</OptForm.Button>
            <OptForm.Break />
            <br/>
          <hr/>
            <OptForm.Text>¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
