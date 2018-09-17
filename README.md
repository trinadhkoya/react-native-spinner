**React Native Wrapper for Activity Indicator**
    
    Don't let user wait for the response ,meanwhile  show him some fun or shoe someting which he might like . 
    So, I created a libray to show Loader which may attracts user attention  

**Getting started**

Tested with React Native 0.39 and > 0.40. Also, see Tested Environments. Let me know if some instructions are missing.

`npm install react-native-spinner
`        
        or
        
` yarn add react-native-spinner
`       

**Good News :** 
    
    no react-native-link.You don't need to do  linking and all.


**Usage**


`import ProgressBar from 'react-native-spinner';
`

// later in your code...

        if (loading || homePageLoading) {
            return (
                <ProgressBar
                    modalVisible={loading || homePageLoading}
                    type={'r'}
                    animationType="fade"/>
            )
        }

**Props:**

    animationType : true, set it to True and see the difference
     modalVisible : true, set it to True and see the difference
     
**How it looks:**

![img_0026](https://github.com/trinadhkoya/react-native-spinner/blob/master/img/greenSpinner.gif)

![img_0026](https://github.com/trinadhkoya/react-native-spinner/blob/master/img/redSpinner.gif)

![img_0026](https://github.com/trinadhkoya/react-native-spinner/blob/master/img/purpleSpinner.gif)

https://github.com/trinadhkoya/react-native-spinner/blob/master/screenshots/IMG_0023.PNG

![img_0026](https://github.com/trinadhkoya/react-native-spinner/blob/master/screenshots/IMG_0023.PNG)


**LICENSE**

The MIT License (MIT)

**Copyright (c) 2017 Trinadh Koya** 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:




