import React, { Component } from 'react';
import NewInvoice from '../components/NewInvoice';

const InvoiceSectionContainer = ({ ...props }) => (
  <NewInvoice {...props} />
);

export default InvoiceSectionContainer;
