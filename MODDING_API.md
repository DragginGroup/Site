# DraggingBlog Modding API (v0.1)
## Explanation
The ``0.1`` version of the DraggingBlog Modding API is a robust system of image and text content replacement.

Using Modding Script Packets,
you are allowed to create simple mods to the DraggingBlog site.
Unfortunately through forks unless 
we make a desktop website application, which would be a waste

# Setup
Setting up the Mod is simple as making a folder,
and having an image or some text to replace using script packets and if replacing an image, 
have an image.

So basically, create a folder in the mod folder inside the Content folder.

Make sure it's with the mod name that you will set inside the SP modding folder's ``api.js`` script packet!

Don't forget to set MOD_ENABLED to true if you are using script packets!

# Production
## Nerdy Explanation Stuff for later
In the ``/Mod/Test`` folder.
There is the folder ``Site/`` and the text file ``version.txt``. 

In the ``Site/`` folder, there is the ``WIP.png`` image.

When linking to the Test mod WIP.png image, the file path in the second quotation set will be ``Site/WIP.png``.

This is because the ``replaceImg()`` function uses the modding api's 
file path of ``Mod/ MOD_NAME /``. Cause the function uses ``returnPath()`` from 
``SP/util/files.js`` which uses the inital path of ``/Blog/Content/`` which makes 
sure it works and we don't have to put in the path...
``/Blog/Content/Mod/Test/Site/WIP.png``

Because that would get annoying.

## Image Replacement
### Base Explanation
Image Replacement is probably the first thing you would wanna do, but hold your horses, 
it's not going to be a "replicate the file location and just add file replacement".

You gotta go to the ``SP/modding/templates`` folder first!

### Script Packet Scripting
And go into the page script packet where you wanna replace the base image with the image you are going to replace it with.

Add the line: ``replaceImg("", "");``.

In the first quotation set you will put the class name of the image tag you are going to replace.

In the second quotation set you will put the file path of the image you have.

### Ending
After you inputted the needed data you should be good to go!

## Text Replacement
### Base Explanation
Text Replacement is as simple as finding the text you wanna replace, and input the text you wanna replace it WITH.

### Script Packet Scripting
Go to ``SP/modding/templates`` and go to the page packet you wanna edit.

Now add the line: ``replaceText('', '');``.

In the first quotation set you could put the text id, like ``name``

Now in the second quotation set you will put the text you want to use.

And your done :)
