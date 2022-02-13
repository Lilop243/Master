import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
        
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Centre</Footer.Link>
 
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
   
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Centre</Footer.Link>

        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Block Master</Footer.Text>
    </Footer>
  );
}
