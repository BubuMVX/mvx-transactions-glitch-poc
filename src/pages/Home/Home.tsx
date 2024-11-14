import { Transaction, TransactionsFactoryConfig, TransferTransactionsFactory } from '@multiversx/sdk-core';
import { DECIMALS } from '@multiversx/sdk-dapp/constants';
import { useGetAccount, useGetNetworkConfig } from '@multiversx/sdk-dapp/hooks';
import { sendTransactions } from '@multiversx/sdk-dapp/services';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/types';
import { Address } from '@multiversx/sdk-network-providers/out/primitives';
import BigNumber from 'bignumber.js';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { apiTimeout, environment } from '../../config/config.tsx';

export const Home = () => {
    const { network } = useGetNetworkConfig();
    const account = useGetAccount();
    const egld = new BigNumber(0.01);
    const egldName = environment == EnvironmentsEnum.mainnet ? 'EGLD' : 'xEGLD';
    const [size, setSize] = useState(1);

    const handleTransactions = async () => {
        const factoryConfig = new TransactionsFactoryConfig({
            chainID: network.chainId,
        });
        const factory = new TransferTransactionsFactory({
            config: factoryConfig,
        });
        const transactions: Transaction[] = [];
        const wallet = new Address(account.address);
        const amount = BigInt(egld.shiftedBy(DECIMALS).toFixed());

        for (let i = 0; i < size; i++) {
            transactions.push(factory.createTransactionForNativeTokenTransfer({
                sender: wallet,
                receiver: wallet,
                nativeAmount: amount,
            }));
        }

        await sendTransactions({
            transactions: transactions,
            transactionsDisplayInfo: {
                processingMessage: 'Test in progress...',
                errorMessage: 'An error occured',
                successMessage: 'Test finished!',
                transactionDuration: apiTimeout,
            },
        });
    };

    return (
        <Row className="h-100 justify-content-center align-items-center">
            <Col xs={'auto'}>
                <h2 className="mb-5">
                    How many transactions to execute?
                </h2>
                <div className="mb-3">
                    <Form.Range
                        onChange={e => setSize(Number(e.target.value))}
                        value={size}
                        min={1}
                        max={100}
                        step={1}
                    />
                </div>
                <div className="d-grid">
                    <Button onClick={handleTransactions}>
                        Send {size} x {egld.toFixed()} {egldName} to yourself
                    </Button>
                </div>
            </Col>
        </Row>
    );
};
