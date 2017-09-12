import a from './reducer-BagClosingMachine';
import b from './reducer-BagClosingParts';
import c from './reducer-Domestic';
import d from './reducer-Industrial';
import e from './reducer-KnittingNeedles';
import f from './reducer-SealerMachine';
import g from './reducer-CustomItem';

export default function(){
    return a().concat(b(),c(),d(),e(),f(),g());
};
