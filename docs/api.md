## Modules

<dl>
<dt><a href="#module_basd/lib/basd-node">basd/lib/basd-node</a></dt>
<dd><p>This file contains extensions to lodash that require the Node.js environment.
This includes functions for managing directories, retrieving files from URLs, writing data to files, and more.</p>
</dd>
<dt><a href="#module_basd/lib/basd">basd/lib/basd</a></dt>
<dd><p>This file contains extensions to lodash for a more enhanced usage.
This includes functions for data hashing, generating UUIDs, and more. 
It should be used in browser environments.</p>
</dd>
</dl>

<a name="module_basd/lib/basd-node"></a>

## basd/lib/basd-node
This file contains extensions to lodash that require the Node.js environment.
This includes functions for managing directories, retrieving files from URLs, writing data to files, and more.


* [basd/lib/basd-node](#module_basd/lib/basd-node)
    * [~mkdir](#module_basd/lib/basd-node..mkdir) ⇒ <code>string</code>
    * [~rmdir](#module_basd/lib/basd-node..rmdir) ⇒ <code>string</code>
    * [~getFile](#module_basd/lib/basd-node..getFile) ⇒ <code>Promise.&lt;Buffer&gt;</code>
    * [~putFile](#module_basd/lib/basd-node..putFile)

<a name="module_basd/lib/basd-node..mkdir"></a>

### basd/lib/basd-node~mkdir ⇒ <code>string</code>
Makes a directory at the given path.

**Kind**: inner constant of [<code>basd/lib/basd-node</code>](#module_basd/lib/basd-node)  
**Returns**: <code>string</code> - The path of the created directory.  
**Throws**:

- <code>Error</code> If an error other than "EEXIST" occurs.


| Param | Type | Description |
| --- | --- | --- |
| dirpath | <code>string</code> | The path where to create the directory. |

<a name="module_basd/lib/basd-node..rmdir"></a>

### basd/lib/basd-node~rmdir ⇒ <code>string</code>
Recursively removes a directory at the given path.

**Kind**: inner constant of [<code>basd/lib/basd-node</code>](#module_basd/lib/basd-node)  
**Returns**: <code>string</code> - The path of the removed directory.  

| Param | Type | Description |
| --- | --- | --- |
| dirpath | <code>string</code> | The path of the directory to remove. |

<a name="module_basd/lib/basd-node..getFile"></a>

### basd/lib/basd-node~getFile ⇒ <code>Promise.&lt;Buffer&gt;</code>
Retrieves a file from a URL.

**Kind**: inner constant of [<code>basd/lib/basd-node</code>](#module_basd/lib/basd-node)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - A promise that resolves with the file data.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [url] | <code>string</code> | <code>&quot;&#x27;https://i.imgur.com/SHo6Fub.jpeg&#x27;&quot;</code> | The URL of the file to retrieve. |
| axios | <code>Axios</code> |  | The Axios instance to use for the HTTP request. |

<a name="module_basd/lib/basd-node..putFile"></a>

### basd/lib/basd-node~putFile
Writes data to a file.

**Kind**: inner constant of [<code>basd/lib/basd-node</code>](#module_basd/lib/basd-node)  
**Throws**:

- <code>Error</code> If an error occurs during writing.


| Param | Type | Description |
| --- | --- | --- |
| buff | <code>Buffer</code> | The data to write to the file. |
| [path] | <code>string</code> | The path of the file. If not specified, it defaults to 'based-1.png' in the current directory. |

<a name="module_basd/lib/basd"></a>

## basd/lib/basd
This file contains extensions to lodash for a more enhanced usage.
This includes functions for data hashing, generating UUIDs, and more. 
It should be used in browser environments.


* [basd/lib/basd](#module_basd/lib/basd)
    * [~hash](#module_basd/lib/basd..hash) ⇒ <code>Buffer</code> \| <code>string</code>
    * [~uuid](#module_basd/lib/basd..uuid) ⇒ <code>string</code>

<a name="module_basd/lib/basd..hash"></a>

### basd/lib/basd~hash ⇒ <code>Buffer</code> \| <code>string</code>
Hashes the given data.

**Kind**: inner constant of [<code>basd/lib/basd</code>](#module_basd/lib/basd)  
**Returns**: <code>Buffer</code> \| <code>string</code> - The hashed output.  
**Throws**:

- <code>Error</code> If data is nil.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>any</code> |  | The data to hash. |
| [length] | <code>number</code> | <code>BYTE_LENGTH</code> | The length of the hashed output. |
| [encode] | <code>boolean</code> \| <code>string</code> | <code>true</code> | Whether to encode the output. If a string is passed, it specifies the type of encoding ('hex' is currently supported). |

<a name="module_basd/lib/basd..uuid"></a>

### basd/lib/basd~uuid ⇒ <code>string</code>
Generates a universally unique identifier.

**Kind**: inner constant of [<code>basd/lib/basd</code>](#module_basd/lib/basd)  
**Returns**: <code>string</code> - The generated UUID.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [bytes] | <code>number</code> | <code>12</code> | The number of random bytes to generate. |
| [prefix] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The prefix to prepend to the UUID. |

