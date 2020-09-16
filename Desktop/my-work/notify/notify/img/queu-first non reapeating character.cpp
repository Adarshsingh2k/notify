#include <iostream>
#include <queue>
using namespace std;
int main() {
   queue <char> q;
   int freq[27]={0};
    
    // running a stream until a '.' is encountered
    char ch;
    cin>>ch;
    while(ch!='.'){

        q.push(ch);
        freq[ch-'a']++;

            while(!q.empty()){
                int i=q.front()-'a';
                if(freq[i]>1){
                    q.pop();
                }
                else{
                    cout<<q.front()<<endl;
                    break;
                }
            }

            if(q.empty()){
                    cout<<"-1"<<endl;
                }
       
        cin>>ch;
    }

    return 0;
}
