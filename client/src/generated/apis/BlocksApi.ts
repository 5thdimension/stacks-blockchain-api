/* tslint:disable */
/* eslint-disable */
/**
 * Stacks 2.0 Blockchain API
 * This is the documentation for the Stacks 2.0 Blockchain API.  It is comprised of two parts; the Stacks Blockchain API and the Stacks Core API.  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/614feab5c108d292bffa#?env%5BStacks%20Blockchain%20API%5D=W3sia2V5Ijoic3R4X2FkZHJlc3MiLCJ2YWx1ZSI6IlNUMlRKUkhESE1ZQlE0MTdIRkIwQkRYNDMwVFFBNVBYUlg2NDk1RzFWIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJibG9ja19pZCIsInZhbHVlIjoiMHgiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im9mZnNldCIsInZhbHVlIjoiMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfdHgiLCJ2YWx1ZSI6IjIwMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfYmxvY2siLCJ2YWx1ZSI6IjMwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ0eF9pZCIsInZhbHVlIjoiMHg1NDA5MGMxNmE3MDJiNzUzYjQzMTE0ZTg4NGJjMTlhODBhNzk2MzhmZDQ0OWE0MGY4MDY4Y2RmMDAzY2RlNmUwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9pZCIsInZhbHVlIjoiU1RKVFhFSlBKUFBWRE5BOUIwNTJOU1JSQkdRQ0ZOS1ZTMTc4VkdIMS5oZWxsb193b3JsZFxuIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJidGNfYWRkcmVzcyIsInZhbHVlIjoiYWJjIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9hZGRyZXNzIiwidmFsdWUiOiJTVEpUWEVKUEpQUFZETkE5QjA1Mk5TUlJCR1FDRk5LVlMxNzhWR0gxIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9uYW1lIiwidmFsdWUiOiJoZWxsb193b3JsZCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWFwIiwidmFsdWUiOiJzdG9yZSIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWV0aG9kIiwidmFsdWUiOiJnZXQtdmFsdWUiLCJlbmFibGVkIjp0cnVlfV0=)  ## Design  ### Stacks Core API vs Stacks Blockchain API The blockchain\'s Rust implementation exposes a JSON RPC endpoint (\"Stacks Core API\"), which can be used to interface with the blockchain. It can be used directly. [See the documentation for the `stacks-blockchain` in its Github repository](https://github.com/blockstack/stacks-blockchain/)  All `/v2/` routes a proxied to a Blockstack PBC-hosted Stacks Node. For a trustless architecture, you should make these requests to a self-hosted node.  All `/extended/` routes are provided by the Stacks 2.0 Blockchain API directly. They extend the Stacks Core API capabilities to make it easier to integrate with.  ### Pagination To make API responses more compact, lists returned by the API are paginated. For lists, the response body includes:    - `limit`: the number of list items return per response   - `offset`: the number of elements to skip (starting from `0`)   - `total`: the number of all available list items   - `results`: the array of list items (length of array equals the set limit)  Using the `limit` and `offset` properties, you can paginate through the entire list by increasing the offset by the limit until you reach the total.  ## Client Library A generated JS Client is available for consumption of this API. The client enables typesafe REST and WebSocket communication. Please review the [client documentation](https://blockstack.github.io/stacks-blockchain-api/client/index.html) for more details. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Block,
    BlockFromJSON,
    BlockToJSON,
    BlockListResponse,
    BlockListResponseFromJSON,
    BlockListResponseToJSON,
} from '../models';

export interface GetBlockByHashRequest {
    blockHash: string;
}

export interface GetBlockListRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class BlocksApi extends runtime.BaseAPI {

    /**
     * Get a specific block by hash
     * Get block
     */
    async getBlockByHashRaw(requestParameters: GetBlockByHashRequest): Promise<runtime.ApiResponse<Block>> {
        if (requestParameters.blockHash === null || requestParameters.blockHash === undefined) {
            throw new runtime.RequiredError('blockHash','Required parameter requestParameters.blockHash was null or undefined when calling getBlockByHash.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/extended/v1/block/{block_hash}`.replace(`{${"block_hash"}}`, encodeURIComponent(String(requestParameters.blockHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockFromJSON(jsonValue));
    }

    /**
     * Get a specific block by hash
     * Get block
     */
    async getBlockByHash(requestParameters: GetBlockByHashRequest): Promise<Block> {
        const response = await this.getBlockByHashRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all recently mined blocks
     * Get recent blocks
     */
    async getBlockListRaw(requestParameters: GetBlockListRequest): Promise<runtime.ApiResponse<BlockListResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/extended/v1/block`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockListResponseFromJSON(jsonValue));
    }

    /**
     * Get all recently mined blocks
     * Get recent blocks
     */
    async getBlockList(requestParameters: GetBlockListRequest): Promise<BlockListResponse> {
        const response = await this.getBlockListRaw(requestParameters);
        return await response.value();
    }

}
