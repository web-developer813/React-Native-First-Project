import React, { Component } from 'react';
import NewInvoiceListScreen from '../components/NewInvoice/NewInvoiceListScreen';

const InvoiceListViewContainer = ({ ...props }) => (
  <NewInvoiceListScreen {...props} />
);

export default InvoiceListViewContainer;
