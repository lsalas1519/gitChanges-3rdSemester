
import csv
import json
import sys
import re

PHYTHONIOENCODING='utf-8'

def converToJson(filecsv):
    df = pd.read_csv(filecsv)
    fname=re.sub(r'(.*?\/)(.*)(\_follow.*)(\.csv)',r"\2",filecsv)
    print fname

    jsonfile=open("alljson/"+fname+".json",'w')
    jsonfile.write('[')

    L=len(df.index)
    print(L)

    df=df.fillna('')
    df=df.loc[~df['website'].str.contains('recent call')| ~df['website'].str.contains('Traceback')]
    for i,row in df.iterrows():
        json.dump(dict(row),jsonfile,ensure_ascii=False)
        if i<L-1:
            jsonfile.write(',\n')

    jsonfile.write(']')
    jsonfile.close()

    filecsv=sys.argv[1]
    converToJson(filecsv)



