# UIDs generators

## Examples

### Queue

Generate number UIDs from 1

``` JavaScript
import { UID } from 'grim.lib';

const queue = new UID.Queue();

const first = queue.next; // 1
const second = queue.getNext(); // 2
```

### Generator

Generate string UIDs (16 numbers or letters)

``` JavaScript
import { UID } from 'grim.lib';

const generator = new UID.Generator();

const uid = generator.generate(); // 9b2534ff20dab52f5dfdc3c88547e0bb
```
