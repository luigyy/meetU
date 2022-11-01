import React from "react";
import HeaderForNavbarButtons from "../../components/HeaderForNavbarButtons";

const chatSample = [
  {
    name: "Carlos",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deleniti at ex odit voluptate repellat, atque repellendus laudantium quo blanditiis",
    dateLastMessage: "Now",
    alreadyRead: false,
    profilePic:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Maria",
    lastMessage: "Lorem ipsum dolor sit amet",
    dateLastMessage: "2 min ago",
    alreadyRead: true,
    profilePic:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYYGRgaGiEeGhwYGBgYHhwcHRkcHBwcGBocIS4lHB4rHxwcJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABBEAACAAQDBQYEBAQGAgEFAAABAgADESEEEjEFQVFhcQYigZGhsTLB0fATQlLhFGKCkiNyorLC8QdTQxUkNGOz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAKBEAAgMAAgICAQMFAQAAAAAAAAECESEDMRJBIlFhBDKRIzNxgaET/9oADAMBAAIRAxEAPwDzsCH0hwWHBY5igykdAiQLCCxjE+AHfXrHomGnMFVVFyPsxnuzGwi1Jri35Qf9zco2OGlANkS7fmNNOHjy8YDk1iHUfbIsPgQDme51P1PAQ2fibEJ3V4jU9OHvFqaa2Hw7z+qny/74QHx20Ul94gEbvu9zE2yiQzEYillWvAAVv9YF4mXMa5bKOGbMRyNTT1ggJyzVLSXAbcCQqsdaMwUsCRet+kDJ+PyPkmqyMRUVpRhXRWWgYi1qAnme7DKJrQNxGCmg1Dm/6kNP7lNB5RWH4lP8VEdN7IbjjXNv5GsaKU/fAbRqZW3NyNPQjjxBEXcZstfjUZWy34dWG8VHqIZAow2I2aUKzE+CtNDYNYGm4V13G+hFtHhtnfjSiFrmTvLxp+ZT0JEWJOECgoygKwoyn4b0qynhYW3a9LElmkOjA2PdJ4kWFeFRTlUcAI0tClQOwezyrDNXcDbStLiNhszBHvDeDboB+5iBHTvNTS/TLUU9omw+08jKd1B9D6AecBJGYdkYVGN6VBrTzoR5xk9sIoLo6g95WPdqBUVANeFT6cYIzNrn8RSDQXp4NQel4p46crOzNwAPO9fSnvFLVE/F2Q7LRB3kAAF6XC/tekF8Rhg65l4XHCAx2pLDBKUqb3AJNRQU+XOCuAxAJBQ1G768xC2gyjaPPe20khGjzuPau2ezw6k07ptWlaGmhG8EaH/uPIMdhTLah0IqDrUdfvjvi0CDxlSFCAhQ4DVhYeFh4WHqkc5QjCwX7P7JM+YKjuLdt3hFFJRJAAqTYDnwj0PYuCWRK724Vc8TrTpCylSGjG2WZhyBUSmZrKOA/VTgIstKyIJSfE3xE6gH4mPM38oZsiTXNOfVrj+VBoOUWZVSGmGxbSu5Rb76Qi6H9g7HOFGUaAeg+6dTGTxeG/FYmmam6pCjdSov5Qd2ixYUrTNfou4daVP9R5QGXALOmZSGIU2UaAjifs+EaP2Ur0OwGHCXREBI72XMCwHFmrXxtzgxNlpOXJMQGm5r14EMbg84IYXZrKB8ySfMmvrF1MDpYffSHsHiAv8A6YoTIQSu6uqnj96xPJlMFoe9S3hB1cN08o4ZR/T5VjWFIzv8HW27dxpw6jjCGAYgqwBU+nA/fCD5wtd0OXCsN9fCMZmd/hWFRy/7jj4TMB90rSvqK+MaX+FrrTyjowQjeILM6uDKip1H0/68opTEb8q1J3tw3+w8hGwbDAwHx+DodPGNVG7ASKK0ZM1rsuo9a6Rew0op3kNV3jQj78Ijn50qcudRqAbi2o4xYwM4HvI2ZdaWLC2nMaUPhzgMwZkos1KGlaUIYWI1ysPDw1EebdtuypRXmSwcgJcbyh/+RDyI74P8rDeI9FktShF1a48NR4V+7wReQsxSCK1FGHEbj1EUhKiU42fMrKRYwo2Pars1+BNKhe5WxG7ePAj2MKK+RA6qxKiR1VgpsjAfiuqUqAKt0+6CIt0rKJWXez+AI/xGF/yV941E+UWySVtUgufOntXwhSsP31G4bhpQQR2ZKzMznebctP8AiB6xDZSL14odiQAElL+e3RQDHNpUACDQ28BrDpC55pfcot0GnsfOKm2XIViNcoA6u1BDegRWgeW4dy2t6DoO83nQecWuzWG7mc6kk+JJMUEajBRuQ+bCw9o02z5WVAKQaKLqy0sSCEqxIqw6QrY1RD6R0LHcsGgWMywoflhZYJhhhhWJCIWWMYiyxDiZOYEeUWisNIgUazPZLm1Dof35GAk/DNKmZks2pTc3GnOl+fWNPiUo5NNdRx4wG29LrShI7oow1BGjDp96xNh9hDDUmJ3DTNQj+V6WPRrg9Txghs6fUcGGq+hHSMrsTH5gwcUZDSYo0qLkryI745rSNKtVcOKVb4qaZh8QHI/EPHjGizSXod2l2csxVcKG3MG0INCK2tcf6VhQcwpBFNVa9+MKOlPDlcTxKTKzEAb49B2Rs1cPKqfje7H2EZzspgs80MdFuT7RqdtYm2Ua6ecc/JKlRWEbZzAISjvxsPE1PpQecFAuRABqRQfP0tDcJhcqInKp5kxLOFWoOg9yfaEqh27Y3Dy8q04mnhp9TAvbdwOf/S+sFmbeNACfYCA212p4L7E5fW0MzR7AOzaviX4KQPGzH5DwjayltGK7FjNnc6sxPmaxuZawYlJYiZFiVVhiCJViqItiCwqQ6OQQHKRzLD4UANjMsdyw6EYIGyIiI2ETNETQGFFDGpVeYgDiJgagNvkQSPGn0MaSfoYxG38RkdCCB8Va6brnpXrrEZdlV0VnlGTPWYNRRXvZkN0JPJqeDRrMA4KlOFMnTVP9IKdUHGACsJyZD8YGh1pvysNRvBG/ga0t7NmtZSaMO7x1oytzyuK9GMLdMzVo1ezplip3GvgbiORBgKZ+RBt/qHiAQPCORSMsJtaCOz+F/Dl8zc9f2iD8TPPVR+q3r7isWsfigiZVsTrEPZvDkuXO4GnXSvuPAxG/KQ6VRNPmpU7hYRXmnKpPAepiw4+FeJv5VitPOZwvDvH5CHZNHZgooG80HqCfnGf7RzKA01pXyLERoJp7y8r/AH5xm+0J7hJ5+WWAykCl2LWiD73mNugjHdi5f+GpPARrVxSCxda8MwisUGRaURIsRypgYVBBiYLFEiTYqQgIcRHIwBQoUcBjGO0jhEOUR1hBMRMIiaJXmqNSB4iIQ6toQehBgMKKs7QxiO0KpmUvmF7MorQ+G4+PSNzMEYftDLYsAtcwalvvhSIyxlY6gYcLTKZLrVTXJ31B/wAuYd09OmloMSZmdQ62Yi+nxrda+MU/w2IGYCwpQ5D6rf0ifAMKNalDWnQ1t4V84Sf2GJqsPMrlcaMubxuGHqsKIdjPml0J0YjpoR6e8KMuhWlYAmsZj8t5+n3vEajZEsBTQXqF+oHTTrWAEqXlooszb/0jeevAfY0uCoJYI+Hd8yeevnCxVIEnZZmOBU8NIq4cWLHVr+lvlEjGq9TaOEaDjT1IPsDGu3YKwjmP325L8v2gD2hl1kW/R/xAgk8y7nmR9+cQzyHw6n+Sp8j9IydjpUCezWzpzygCwRaWHLnBib2ZBFmFejCvXvRS2ftIS0FTSlvHd4xDtHtWJZGYhCdFIZnYcVRRryJHtF4UzStex77OxCGwqBvQ0Ppr4xPh9uTUNGDNTcwNfURnz2mxT5jLkkorULOwl96tCADWtCdOUEsP2gzvknS2SgHxAMKtdQCOQMUcWldE1KLdWaTBbeR7EUI130gwHjNJJQmotXeDUQawpoAK1hVIaUS5WGvMCgk7o5FXGHu0JtBYqRTxm2GU5VUczrSBmJmYibpmpy7oibE4lJfeYDjpU+UCJ3atqjJJmMp/MELCgtVcoObwjJOQXUQlJ2FMa7OF5XJ9Yuy9junwzBXjSntGawXbZXIUMisTZXzoTS1FqveNRTrblGnwW2M5ysCjfpanmKaiM0l2gK30WJJe6uBmH5how+RjIdvJLNKfJZhlNdLZqG/QmNsXreM92ikh1cHevpv9KxORSOnk2CmFTevCu7nGy2VnIqa2At1t7Uii2DqxAFKldwG8fSkaXZsgaDlU8gAaDwiEnZRLxYY2DTvA6Fv+P7Qoh2K93HA+5aFGi8Ea0C4WY0x8qCrOasx0VFNKnkTWg305xp58wKElqbZajmKi/PeYC42asiTkFFZxcD8qAX3/ABGwHWCMyiz5a8EA8aC3oY29Cv7DCLYdPeEx7x5fJSfmIllLTKPuw+sQL8LNxLnyqo9oZ4L2BcS+VHbr7AfKJ1QDDX/9ajxcn6iKm1bSWHEgf3NT2MXZ7f4TD+YL5Gg9RC8ZVroBy9kvMQ0dlrvBprWu6JNldk5cl84FX/U9WPPgAOVI02BkjIPD2iwcNwNIvC1oJNPAA+xszOe7R2zUZFZQbGoB0qQD1i5J2eQrq2RjMpUlTYAUUKNwGvUwU/hzx9IcMLz+UXfI32RXHBO0gVgtnlBla9NCDWvWCWGWloeUC6R2SLxOijdltUtFDFSc51oBBEC0VjrDMmgCmy6szOoIIoFY/dT1ikNjFSrFZZZFyq3frToLbhGofC10MQjDMOEFTcejShGfZlsX2aWfJWU6DuknPRQSzEkkUrQVPHrEuyOz0yVQNPd1GmcAsOWfUjlGpWU2+kTJLgSk5dhSUeiuJdBAPbhpQ8QR840Lxn+0FKIToGr6fvEpdFIPTN4LC5qs1lXU8TlOnn6QWQgI4XQIR5jLbneBbziy5RYUPhat+dIK5O5Te8z0DD6xF9FH2TbJW8zmwHoTCh2zjQsf5yfTL9YULgKZj9tYszJpJPdWlOdTQfO3MxrsYP8A7lDzAPjL7p87RiMRXMxvXMbcCDenI0942OMm0ny3rZ0SnC+/yqPGBB3os1VI1KHVuAiHL3Kfy+9/nDlPcPSnrEoFQeFKew+UWawijP46XmCjd+Iv+4fWJh3pVt8yvmQfrHctQp5hobJ+FF439/qIlE6F6C2F0i6Eiphouq8dUOiU+zgSONHWeKOIxgBoDeGbSFSbLBTjDVa9ogznSJpaQLGovA2iugqYkDxAy0vDNiJE4SERFCdiShB3GLMnEhrwLXQXF9kwSH5aCOK4jrvDYLpTmtGZ7TzaZQdMpJPAb/aNLPMYvthNJP4YHxpQk/CAS287zTSIT6LRzQPgGqwvUu60puqpHlSojV4qgyAaAk16Vv46xk9luRlUCpzWNPyhTWgrpoK8402NfQcFA8Wv6UiDkUSLuyEzDlUjy1/1VhRNsxciA+A9a+xhQ6WE3LTBY+VVz4nTjQk/64OYkZsLJmA1/DGQ7/hcFT0oDEe1sH8bDS48qRJ2c/xJUzDv+dcynmND0t6xGD1oeaxM1uHOZBzoP91fWLQ+Bj/LX5wO2Ux/CvucjpR2W8EJo/wn/wAvyMdF4c9aC5SdxD/+sRWzUdR/Lb39h6QQlr3UHIj0EC8YlO8NVv8A23I8QxETeUXiwzh3tE/4lIHYV6qCDWsNxM1qhRqfusVjLDSjbJsTiyTlXX2h0nBgCpuTHMJh1F9TF9aRWKvWLJ1iKpnKtyQOsW5E5T+0RzJQIoRFf+GYfB5Q3QjphOoiviMSq2ikqTa3oByvEyYcVqbnnBBSQ2eocUig6tKNRUr7QZCARWxUsGElFDxencNigwsYs/iRmw5R6A2PpBSTNJEBMMo+yac0ef8AakBsSSWUZUUUoS29rDTfG9ArHmW0JbTsVNOoMyg1sF7u7jT1iXI6Q0VbL/Z3DAsWpYmxJqTXUkwdY53PMkj2HoBFaQgRAg10tu4n5dSII4CXevD5U+ZiEUPJhGYhyhR9/dPWFHJU3/EUDmOvd+ghRYgVcbhqo55n5QE2ShllW5kV5Eg+V41Mxe445H2gN+D3GtvPuflEGqdllqoNynDI5W1RXxt619axcV88ljxAgJsOdVCvX538wfKCWzHqjrwH0/eLXf8ABCq/kglvRFP6WHkR+wiHEKM9dwYeTD9/SJQvxLuPzuPWkVcSxGRj/kfkSe6391v64mnaLVotlNlZpZ/KTTpBCfhqkH2gZibMswb7HkR+0GsNNDqDFYO1QZWtBG08BMCky5jht1wR5EEQN2RjZk0FTMdXQlXUhdQdRbQgg+IjXMAwgNPwmRy6AZiKEHQioPuI6V0CMrVey08qcoGWZXky/MGOSsTiQK5Vbpfx0EEkxUtnUE0OWtwQNQKV0JvpF3Dy0odDc319YZIi+Tx7X/AKmLxD/DLA45hT3hst8S2uRBx+L5fOD8lVy0638SIq4meiKrEigNyPnyrSDQv/AK26SRldv42fIlu5mDuj9NBXdevGkVNiPipyBpjlSQLItKedYsbXlti5gDDLJR82vxsMuViOAIrTeaQcwksKop4Qp0X4x1aygmE79zmIABJ3mCH4YEPRKVMNYxKhHKyLFzMiEjWlup0jDTgJLksDmKkg8gL0PH767OY+dso0GvWKO1tnK6Cu42PC2/luhJxclhoyp6AdnTMyfiH8wtyFa0g5hXoijext0WnzIgSkoBVQbjTpc1++UWVn1xCIPgUZP6hQkn19Yg3SK1YQw02uIHBc3tb3hRDhFpMbjofD7MKGUico6GZlw45fIwPnL3CefyghKbNXmP2++sVMWncPn6UhZO1Y0foE7On/AIboDvsfU/Uwd2b3ZrLuYMPHURk9qYgI4J/KAaWvqD9840iuQUmV/SSetifKBF4mLJbRaO486H5esKdKDqwIqCKMOI08+fSGz2o7ruNx4ioPvDEnUI5+/DpDKujb2VZCao9+fHg3j7xNhiUJU+HMR3Fro67vbeD7+fGLCIHA3cORgRx0O3lk0ibWHzkzD2MUZZKvQwTC1EdcWSeO0Dnp8Lj94SPl+Fj0N4vtLrY3iu2DG60VsdckWqkRjFMB8S25RWzg1LsW300EXDgK74dLwKi5FTzg4FckF0tKuGllzUiijQcYJqu8w5UhTjuhGRlJyZFNaA21do5KIt3eyjhxY8hHe0W25eHltMdrLoN7NuVRvJjE9h8RNxk6fipvw1CqK2ULU0BO4Ai/GsK1lhi1dM3uypVFvrvMQdoNr4fDpWfMVA2guWP+VRUmMP2t/wDIYl1k4IqxpRpuqqeEsaE/zadY8xnTnmMXdmdjqzEsT1JisYZTJTn8rRtpnbQ/isZSZkzVXOadagVtW+u+JMH2zVXrNQAE1JQ3BNRXKddTvjGJ3RFGYbmNL9Px1qFXPO8Z9AYbFpNCzpTBlfUg6MBcEag30PE8IUeMdne0M3COSlGVviRrg0BoacRCjmf6aV/EsudV8j3vAzNfvf8At6R2Yaoev0iDDmnh9/Mw+ScyHr7qDHJeUXrbMBtOYXxMwblBpXhXLT+7/aY2OGmZ8MpH/rI8jQX8Ix21gRiHUfnDkHmTQCvKo/tMajZHewygWqrEDhUk0HqIrJVEkncgpOfMqONctD1B/cxCr5vG/wBfn58oo7Ixof8AFSt0cMP8rAVpyrWHh8rlTx9/lWkRbplYq0XpOKqCOdD13Hx+cT4SfTpavKujfKAU5yr1/UPUfOJf4rIc2tLkcVNmHzg+W2HxwP7TSyuNxoeh3+cXcI9VgekwMuUmqstjyNvMGK+yNoC6VupIPhaOmEtJNWqNAY7SI0mAxLmjpRJiyxyFmhrTANYIDrGkBNubXSQjTHYKqipPsAN5PCFtvbqSELuaDcN7HgBHiHa7tBMxLnMaID3VGg68TC/gPSsq9p+0L4yZVrItci8BxPEmGy+0M1cL/CIQqMSXI+J6/lJ3LbQa77WgIIcsVSRG2OQcYnVxuB9vaKwi1JFLxSIjJHalgbnkIpOtIlZ7w3EC8aWoCIYUKFExj6Pl95C4qN3lx8/WHYNx3hwpUcO6BT1jkoUGXlXqeEMwh+I6Eit9+lPGgjyfyej+DG9oEZZz0vQllA1NCHt5sPFY0eywBKABqKEg8mZqffKA228Sn4ry3NqoQco7mbu1/wApOp3X5VI4SaJWGDuAmSWoIrXKaEgE14svnFuRXBIgnTZmNl7TKYh3I0ZlYcVJFDTfb2rvjWThXKymvA7mXr09o84wMwI4zVytZGN8jNXuMdclQRW9LxvdhTs6hDpfIeB1Knhy8eEDm4cwbi5NOv3hlJuD3T7VhjkhQTus3Q7/AG9YITMGb5d2o4cjyiuZDVqKkaMp1FfvmD1149OpUTbBxdQZRN1unlpGX7Ty5iYozJTMhYA5lNATwYaV6wWmYR0dXTvKNR/LqKHfqfOCGNlCZlYitqGuvjzEX45uqZKUdtA/ZnaqeopNQE/qWq16jSCydq1/Q3p9YHT9nBV0tx3jrygc0ihpHXGTok6NKe1aU+F/IfWA+1O2L0IlpQ/qa/oPrAzEMBb5fdIEYuYN0U8mCkC9s495hLuxY8T8uAjLT3qYNbUmUBJgCTDwXslyS9HIUICHKIqkRHS1rFsrQRDJS8Wpi2iqWCtlOt4fNWohtLw8cIwSoRCh8wR2JtBPoJHJN+N+mntFh5gZqofhqDysSPvrFHHTxLSup0HjbysT0BgbsDFHPU6szVB5kt7X8Y8iMX42z0JS+VIE9pWDYkDWtFPKqAX4ghqeouIt9o8aknDLLYFhNNDe4QAAsT0y+dodi9nF8dm/J3SLbwSRRuAvbdXnAPtpOExgyHuqgCEaas1uoA8DHXCPk0vo5pOrAeHRkJykMhujH9QIORxuan1Boagjs3aRw4DCpQGjCpJUV7rA8tKn9NDoaB9nYyhyMLGlibVHwkV0O7hem4RZxKFRmS4a4FddaqQRcFSQQdQAd0dM4fZKLPX5WIDos+XewqBow+u8RO8hX76GjgeY4HlGE/8AH22FAWVXutXKpNSMtyONALf0877KY5RwRp7R5XIvCdPo7YS8o2iyiKdRQ7xurx5HnFfEYUAG1t8EjR1Di1Rem4/fvziJRUG1xY9fofnGQ1gVCRb4l3jUjpxihj8MBVl+Hd8wYK46RkIdfhPxD5/fKBuInADvaE0PHiD5e0Vg6EkjO4l/uv0gTiW1MENqJkYgmx04ecBMU9bDf4x02IZ/a06rAeMD6Rb2mtJjDhT2B+cVIvFYc0ncmKsSS4iiVIpF6IyaXFtrrFOWYty4ohWVHF46rQ6YsQlqRjDJzVMKGGORJvRz2ztLOAdUzgZcpygjMaEAih0B0r1ivsWYXZW3rMNf7MtvECmsDMZiS2KnTGPdVlVQDQFjLDUp/mZmPQRH2RxLF2Qk2Yip3kaHrYCm8L5cT4/6dI6FP5WaXab0Mwg5SoIVr2z1J60WunLwyG0nzd8DuCzILZQO6K/ptlFRUCg3EiNf2jmZHkivdZqE/qZuO6hpTqVjKADMyFbgshINDUHKajgaKKjSvG5fh1Ji8mNozc/ClGIXvLqNAacSBf8AqWJJWKotCaqxPGxFD3WpcjUeVDpDNoMyMVNbMRUgG5JIBGqtThTlWGyJ+dggXMzECorTNWgJretaAEk8o6m8Iou7DATGymXUuLUpVT8RNORJ/t4R6rNfNLBOuXX+nX0jC4DY/wCEAi1ea9cjH/40Y0dx+lbEA/matLAxscTMEv8ADk6swApvCqAMx6ax5X6n5NUdnDiZf2TisoANKGx8dPU+sX3bK/I/YPlXyEAAuRCDz8NKQTlT84Wu8U/qF/2iHFL0XlH2WsQoNVIsaxhtqsUZkO6/vfyjaY96BG6e4B9GjJ9rJXfzj9ND9+flHTFaRvDNbRm5gR+mnoACeu+KOFk1a8TsCW66+Kn5xYwMuLgSMv2mw5WdWnxKD/x+UBjG87V7NLyRMAq0u55qdfKgPnGCMdEHaObkVSFEixGIkU/dIpEmx6GLkqKaRakmLIVimiKjmLU2KziBIMSCkKHUhRKgnoWPnB8QQDRczUvQEua5uZBNOQA5mI5E0I65DRQUYGl2FMzEfpqu7rXdAHDMaLmJzhQWNydRRb6kiniYNhKItSFLmgrXuotR3RvJJK24HiImo5Q96bHbkv8AiMMt6MfhJtRxRkqeFbHrGbxjq09ypyzEajGhpXuFs3Cl+RzGuhJ1xwp/gkrqAtzSvwICx8SYwwxaT5xJISdmN6WcAsnf4tSozcNQRcS4VVr6spyPplHHqXAmgFc1mAqwUnW61DLrSm6m8Qf7H7JQB3VfxHWwAy5WZqigNN5DIWvQBjTjm8Q8yWWTvWIFCcwuaGu8GleMepdnkEvCo5HeerDQHvAACo411/mPOKcjwnHsJ4fCLLDTGOZyBU7idwWgso9B4xF/CAEzXuxGp4C/gvKLhTPlUmymp50F+m+AnaPHfClaAjO/JBYKOpt4844ZR8mdEZUVsbiQ2amg/Y/OHYDFWB4OD5j94BTMQcpsQzKTe/epkA4aqT4xzCYuiAbyfetPSkQlDx0tGXka7a+ICYcE/lD35qD9Iz/beeFEk6K7soPPVfCmb0h23sdnw9uIJ6FDX5xnu3u1Q+GkU+LPmHKikfOOri+TRKb8SuqAtFrCijdb+MD9lYgOoO+kF5KgXOkW8doaMk1ZeQ7oxu3uy7K2eQMysfhGqnW3EWPSNhLaprFhUqQeH2T984KlTwEoqSpnkmKwjyzlmKVNK0IpbSvpEKx6F212Znk/ij4pd+qkgEedD58Y8+A+6R0QdqzlnHxdD1MTSzFcRLLMWRNlibfSKzKB1+sWlvFaaILAiFhCjjGFCYMaadLJzkk5pgFLkVACm/Sp8uIMXZ6FprlaMqhAim1y+ZdOCoK9OcB8TiGLo9blQKDQNuHgGEabZuX8UGndBzj+YM7IFHMKUhGqRrN32nmiRhEX+VVJr+UKSx/tjyDEFc5KmpV2BBtatD4GhuOO6PUf/JM7KqJuYBQN+5W/0kDzjzBirZpmlKXH6hYV3Gla88vOJ8SpWPJ2y9OxLkVerd9Mr0qTZzQka0K0vpSPR5U2uEw6oAMrKtBoArELqeQ624x5TMYmSAKHvnfSoCg5gOFXNeHhbW9m9oFECElgCG1B7uVFoaaFcoP9RMaccBFm4XF5Xyn+YW4sXb2A8TGa2vNLOaC5CC9ad2ZU6dfaFtXaQWcAWFSqGpNqipBpuqRpyETT3VlqKd6pIp4keLAV8Y4ncZF47Ez+0zldBm7osAKXPMjQDXz4xTlYus0qNKa8ydB0v9iI9oZAzTGcuwFKgWBALVvoL+2sQYFQoM1lyilVqb3+QqadYPJG4sMZUw/PmhkZDoR7/wDZjIdoJhyoh1VfUVX1v5QZlYoOWA3HLzt3T9YGdo8OSFYaDUDS/wCbzB84XgfjPxY3J8o2iLYU+gHK3lpGokYgNSMTseZRiPEdRGhwmIo3I3Edsl7JcUto0spuEEcOogLhptYB9rNvmhw8s0/9hH+0fPy4xOMbdFpSUVZS7XdoPx2/Dln/AAlO785H5jxA3efTNVhsdrF1hySbk7ZIDD1N4jEPUxZCMtKYhnxJKMQT2vBfQq7IYUdAhQlDhGV8cvqvuB8oOYFz+ADXQj/+sswoUYxtP/LVlVhrRr9RhvqfOPOl0I3ZXt5GFChIdI0uytKsq8nP+1IK7I//AC5i7hUU6VjsKDP3/gMQztKWCyGl6i/SZ+584Iq5KPfe59K/OFCjil2i0emCcNIVjcA0YJ/TRbdIo7RclkU6FkqNxsTChQ8uwLoGYRz+ML61rzq7QV2hfDvyr9YUKJcn9xf6KQ/aZPBnviDrWy9TChR1vohH9yC0hyEJroPlGHZiTUmpOsKFGgU5fQyFChQxEesPEKFFY9AZIvyiFtT1hQoLAuzqxyFCjGP/2Q==",
  },
  {
    name: "Jose",
    lastMessage: "Lorem ipsum dolor sit amet",
    dateLastMessage: "5 hours ago",
    alreadyRead: false,
    profilePic:
      "data:image/jpeg;base64,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",
  },
];

const Chats = () => {
  return (
    //TODO: make profile section a button
    <div>
      <HeaderForNavbarButtons title="Chats" />
      {chatSample.map((item, index) => (
        <div className="flex items-center hover:bg-gray-100">
          {/* pic section  */}
          <div className="p-5 w-1/4 min-h-[50px]  flex-col">
            <img
              src={item.profilePic}
              alt=""
              className="h-[50px] rounded-full"
            />
            <h1 className="">{item.name}</h1>
          </div>
          {/* message section  */}
          {/**TODO: make sure lastMessage has a max length  */}
          <div className="w-3/4 h-[100px] mr-4 pt-5  ">
            {/**message box */}
            <div className=" h-3/4">
              {/**if string if bigger than 75 chars, chop it so it can fit into the box */}
              {item.lastMessage.length > 75
                ? item.lastMessage.substring(0, 75) + "..."
                : item.lastMessage}
            </div>

            {/**date box */}
            <div className="absolute right-4 text-xs text-gray-600">
              {item.dateLastMessage}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
