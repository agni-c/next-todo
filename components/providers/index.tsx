'use client';
import React from 'react';
import GraphqlProvider from './GraphqlProvider';

const index = ({ children }: { children: React.ReactNode }) => {
	return <GraphqlProvider> {children}</GraphqlProvider>;
};

export default index;
