const searchDocument = {
 "Father's Father":"Grandfather",
 "Father's Mother":"Grandmother",
 "Grandmother's son":"Father",
 "Grandfather's son":"Father",
 "Mother's Father":"Nana", 
 "Pita ka Pita":"Daada",
 "Pita kee Maata":"Daadee",
 "Daadee ka Putr":"Pita",
 "Daada ka Putr":"Pita",
 "Maata ke Pita":"Naana",
 "Mother's Mother":"Grandmother",
 "Father's younger Brother":"Uncle",
 "Father's elder Brother":"Tau",
 "Father's younger Brother's Wife":"Aunty",
 "Father's elder Brother's Wife":"Tai",
 "Mother's Brother":"Uncle",
 "Uncle's Wife":"Aunty",
 "Father's Sister":"Aunt",
 "Son's Wife":"Daughter-in-law",
 "Mother's Sister":"Aunty",
 "Mother's Sister's Husband":"Uncle",
 "Maata ke Maata":"Naanee",
 "Pita ka chhota Bhaee":"Chaacha",
 "Pita ka bada Bhaee":"Taoo",
 "Pita ke chhote Bhaee kee Patnee":"Chaachee",
 "Pita ke bade Bhaee kee Patnee":"Taee",
 "Maata ka Bhaee":"Maama",
 "Maama kee Patnee":"Maamee",
 "Pita kee Bahan":"Bua",
 "Putr kee Patnee":"Bahoo",
 "Maata kee Bahan":"Mausee",
 "Maata kee Bahin ka Pati":"Mausa",
 "Grandfather's only daughter-in-law":"Mother",
 "Grandma's only daughter-in-law":"Mother",
 "Mother's son":"Brother",
 "Father's daughter":"Sister",
 "Daughter's Husband":"Son-in-law",
 "Mother of daughter's Husband":"Samdhin",
 "Daughter's Husband's Father":"Samdhi",
 "Brother's son":"Nephew",
 "Brother's daughter":"Niece",
 "Daada kee ikalautee Bahoo":"Maata",
 "Daadee kee ikalautee Bahoo":"Maata",
 "Maata ka beta":"Bhaee",
 "Pita kee Betee":"Bahan",
 "Maata  ka beta":"Bhaee",
 "Betee ka Pati":"Daamaad",
 "Betee ke Pati ke Maata":"Samdhin",
 "Betee ke Pati ke Pita":"Samdhi",
 "Bhaee ka Putr":"Bhateeja",
 "Bhaee kee Putree":"Bhateejee",
 "Pati kee Bahan":"Nanad",
 "Patnee kee Bahan":"Saalee",
 "Bahin ka Putr":"Bhaanja",
 "Bahin ka Putree":"Bhaanjee",
 "Pati ka chhota Bhaee":"Devar",
 "Pati ka bada Bhaee":"Jeth",
 "Patnee kee Maata":"Saas",
 "Pati kee Maata":"Saas",
 "Patnee ka Pita":"Sasur",
 "Pati ka Pita":"Sasur",
 "Chaacha ka Putr":"Bhaee",
 "Husband's Sister":"Sister-in-law",
 "Wife's Sister":"Sister-in-law",
 "Sister's son":"Nephew",
 "Sister's daughter":"niece",
 "Husband's younger Brother":"Brother-in-law",
 "Husband's elder Brother":"Jeth",
 "Wife's Mother":"Mother-in-law",
 "Husband's Mother":"Mother-in-law",
 "Wife's Father":"Father-in-law",
 "Husband's Father":"Father-in-law",
 "Uncle's son":"Brother",
 "Taoo ka Putr":"Bhaee",
 "Mausa ka Putr":"Bhaee",
 "Maama ka Putr":"Bhaee",
 "Phoopha ka Putr":"Bhaee",
 "Bahin ka Pati":"jeeja",
 "Pita kee Bahin ka Pati":"Phoopha",
 "Patnee kee Bahin ka Pati":"Saadhoo",
 "Tau's son":"Brother",
 "Sister's Husband":"Brother-in-law",
 "Father's Sister's Husband":"Uncle",
 "Wife's Sister's Husband":"Brother-in-law",
 "A kahata hai ki usakee Maata B kee Maata kee ikalautee santaan tatha Putree hai to B, A se kaise sambandhit hai":
   "Maata",

  'Ek ladake kee tasveer kee or ishaara karate suresh ne kaha,"vah meree Maata ka ikalaute bete ka beta hai." kis prakaar suresh us ladake se sambandhit hai?':
   "Pita",

  'Ek ladake ka parichay dete hue , Ek ladakee ne kaha,"vah mere Chaacha ke Pita kee Betee ka beta hai." ladakee se ladaka kis prakaar sambandhit hai?':
   "Bhaee",
 "A says that his Mother is the only child and daughter of B's ​​Mother, then how is B related to A":
   "Mother",

  'Pointing to a picture of a boy, Suresh said,"He is the son of my Mother\'s only son." How is Suresh related to that boy?':
   "Father",

 "Introducing a boy, a girl said, \"He is the son of my Uncle's Father's daughter.\" How is the boy related to the girl?":
   "Brother",
  'Ek tasveer kee or ishaara karate hue ritu ne kaha"vah mere Daadaajee ke ikalaute bete ka beta hai." rituta se sambandhit tasveer mein aadamee kaun hai?':
   "Bhaee",

  'Ek tasveer kee or ishaara karate. aamir ne kaha,"vah mere Bhaee kee Pita kee ikalautee Betee ka beta hai." kaise aamir tasveer mein aadamee se sambandhit hai?':
   "Maama",
  'Ek mahila kee or ishaara karate, abhijeet ne kaha,"usakee potee mere Bhaee kee hee Betee hai." abhijeet se sambandhit aurat kaise hai?':
   "Maata",
  'Pointing to a photograph, Ritu said,"He is the son of my Grandfather\'s only son." Who is the man in the picture related to Rituta?':
   "Brother",

 "Pointing towards a picture. Aamir said, \"He is the son of my Brother's Father's only daughter.\" How is Aamir related to the man in the picture?":
   "Uncle",

  'Pointing towards a woman, Abhijeet said,"Her granddaughter is my Brother\'s daughter." How is the woman related to Abhijeet? ':
   "Mother",
  'Soniya ka parichay dete hue, mahesh kahate hain ki,"vah meree Maata ke hee Bhaee ke hee bhateeje kee Patnee hai." kis prakaar Soniya mahesh se sambandhit hai?':
   "Patnee",

  'Ek aadamee kee or ishaara karate hue, Ek mahila ne kaha,"usakee Maata meree Maata kee hee Betee hai." aadamee se sambandhit aurat kaise hai?':
   "Maata",

  'Sumit ne kaha -"yah ladakee meree Maata ke pautr kee Patnee hai". kaise Sumit ladakee se sambandhit hai?':
   "Sasur",
 "Introducing Sonia, Mahesh says, \"She is the Wife of my Mother's Brother's Nephew.\" How is Sonia related to Mahesh?":
   "Wife",

  'Pointing to a man, a woman said,"His Mother is my Mother\'s daughter." How is woman related to man?':
   "Mother",

  'Sumit said -"This girl is the Wife of my Mother\'s grandson." How is Sumit related to the girl?':
   "Father-in-law",
 "Mere Pita kee Bahan ke ikalaute Bhaee kee Patnee kee Putree meree rishte mein kya lagegee.":
   "Bahan",

 "Shyaam ka Bhaee Raam hai aur Raam ka Pita mahesh hai. priya ka Bhaee jagat hai aur Shyaam kee Betee priya hai. jagat ka Chaacha kaun hai.":
   "Raam",

 "A, B ka Bhaee hai ch, D ka Pita hai, D, ai kee Putree hai tatha B, D kee Bahan hai. ai, A ka/kee kaun hai.":
   "Maata",
 "How will the daughter of my Father's Sister's only Brother's Wife be related to me?":
   "Sister",

 "Shyam's Brother is Ram and Ram's Father is Mahesh. Priya's Brother is Jagat and Shyam's daughter is Priya. Who is Jagat's Uncle.":
   "Ram",

 "A is the Brother of B. C is the Father of D. D is the daughter of E and B is the Sister of D. Who is the Sister of A?":
   "Mother",
 "Vijay kahata hai ki yah meree Bahin ke Pati kee Saas ke ikalaute Putr kee Patnee ka Putr hai. Vijay ka usase sambandh hoga.":
   "Pita",

 "A, B kee Bahin hai, kintu B,A kee Bahin nahin hai, to A tatha B donon ke madhy kya sambandh hai.":
   "Bhaee-Bahin",

 "Arun aanand ka Bhaee hai Sushama aanand kee Maata hai, Prakaash Sushama ka Pitaajee hai. madhu, Prakaash kee Maata hai to Arun madhu se kis prakaar se sambandhit hai?":
   "Padapautr",
 "Vijay says that this is the son of the Wife of the only son of my Sister's Husband's Mother-in-law. Vijay will be related to him.":
   "Father",

 "A is the Sister of B, but B is not the Sister of A, then what is the relationship between A and B.":
   "Brother-Sister",

 "Arun is the Brother of Anand. Sushma is the Mother of Anand. Prakash is the Father of Sushma. Madhu is the Mother of Prakash. So how is Arun related to Madhu?":
   "Great Grandson",
 "Ek vyakti ka parichay dete hue Ek mahila ne kaha, usakee Patnee mere Pita kee ikalautee Putree hai, to bataon ki us vyakti ka us mahila se kya sambandh hai.":
   "Pati",

  'Ek vyakti ka parichay dete hue Shyaamalaal ne kaha" us vyakti ka ikalauta Putr mera Pita hai",Shyaamalaal va us vyakti mein kya sambandh hai.':
   "Daada",
 "Introducing a man, a woman said, his Wife is the only daughter of my Father, so tell me how that man is related to that woman.":
   "Husband",

  'Introducing a person, Shyamlal said,"The only son of that person is my Father", what is the relationship between Shyamlal and that person. ':
   "Grandfather",
};

export default searchDocument