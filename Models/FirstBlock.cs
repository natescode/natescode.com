namespace natescode.Models
{
    using Piranha.Extend;
    using Piranha.Extend.Fields;

    [BlockType(Name = "First", Category = "Content", Icon = "fas fa-use")]
    public class FirstBlock : Block
    {
        public StringField Title { get; set; }

        public StringField Description { get; set; }
    }
}
