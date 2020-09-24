import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'

const AdminExample: FC = () => {
    return (
        <Layout>
            <PageBlock
                title="Titulo"
                subtitle="Alguma explicação."
                variation="full">
                <h1>Hi Lorena!</h1>
            </PageBlock>
        </Layout>
    )
}

export default AdminExample