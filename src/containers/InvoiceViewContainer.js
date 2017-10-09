import React, { Component } from 'react';
import InvoiceViewContainer from '../components/NewInvoice/NewInvoiceViewScreen';

const OfferViewContainer = ({ ...props }) => (
  <NewInvoiceViewScreen {...props} />
);

export default InvoiceViewContainer;
